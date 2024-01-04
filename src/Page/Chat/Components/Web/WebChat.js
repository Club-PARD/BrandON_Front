import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Input from "./Input";
import Chatting from "./Chatting";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { AIMessage, HumanMessage } from "langchain/schema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";

const WebChat = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [preInput, setPreInput] = useState("");
  const [chatModelResult, setChatModelResult] = useState([]);
  const [chatMessage, setChatMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [wrapCount, setWrapCount] = useState(0);
  const userID = localStorage.getItem("userID");
  const [chatRoom, setChatRoom] = useState({ answers: [], init: true });
  const [res, setRes] = useState("");

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo-16k",
    temperature: 0.2,
  });

  const user = localStorage.getItem("nickname");

  const [template] = useRecoilState(chatPrompt);

  const humanTemplate = "{answer}";

  const memory = new BufferMemory({
    chatHistory: new ChatMessageHistory(chatModelResult),
    memoryKey: "chat_history",
    returnMessages: true,
  });

  const chatPrompt = ChatPromptTemplate.fromMessages([
    ["system", template],
    new MessagesPlaceholder("chat_history"),
    ["human", humanTemplate],
  ]);

  const chain = new ConversationChain({
    llm: chatModel,
    prompt: chatPrompt,
    memory: memory,
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }

    const getRoom = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_URL + `/user/${userID}/recentChatRoom`
        );
        console.log("chatRoom:", response.data); //response.data = chatRoom
        setChatRoom(response.data);
        localStorage.setItem("chatRoomID", response.data.chatRoomId);
      } catch (error) {
        console.error("서버 요청 에러:", error);
      }
    };

    getRoom();
  }, []);

  useEffect(() => {
    const createRoom = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_URL + `/${userID}/chatRoom`
        );
        console.log("chatRoom:", response.data); //response.data = chatRoomId
        localStorage.setItem("chatRoomID", response.data);
        setChatRoom({
          answers: [],
          brandCard: null,
          brandStory: null,
          chatNickName: null,
          chatRoomId: response.data,
          finishChat: false,
          keywords: [],
          userId: userID,
          progress: 0,
        });
      } catch (error) {
        console.error("서버 요청 에러:", error);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      const res = await chain.predict({ answer: "start" });
      setChatModelResult([new AIMessage(res)]);
      setChatMessage([res]);
      setIsLoading(false);
      try {
        const response = await axios.post(
          process.env.REACT_APP_URL +
            `/${userID}/${chatRoom.chatRoomId}/draftAnswers`,
          { progress: 0, answers: [res] },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("chatRoom:", response.data); //response.data = chatRoomAnswers
      } catch (error) {
        console.error("서버 요청 에러:", error);
      }
    };

    if (!chatRoom.init) {
      if (chatRoom.finishChat) {
        createRoom();
        fetchData();
      } else {
        if (chatRoom.answers.length === 0) {
          fetchData();
        } else {
          setChatMessage(chatRoom.answers);
          const chatHistory = [];
          chatRoom.answers.forEach((message, i) => {
            if (i % 2 === 0) {
              chatHistory.push(new AIMessage(message));
            } else {
              chatHistory.push(new HumanMessage(message));
            }
          });
          setChatModelResult(chatHistory);
          setProgress(chatRoom.progress);
        }
      }
    }
  }, [chatRoom.chatRoomId]);

  useEffect(() => {
    const autoSave = async () => {
      if (preInput !== "" && res !== "") {
        try {
          const response = await axios.post(
            process.env.REACT_APP_URL +
              `/${userID}/${chatRoom.chatRoomId}/draftAnswers`,
            { progress: progress, answers: [preInput, res] },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("chatRoom:", response.data); //response.data = chatRoomId
        } catch (error) {
          console.error("서버 요청 에러:", error);
        }
      }
    };

    autoSave();
  }, [res]);

  const handleSubmit = async () => {
    setPreInput(input);
    setWrapCount(0);
    setInput("");
    setIsLoading(true);
    const res = await chain.predict({ answer: input });
    setChatMessage([...chatMessage, input, res]);
    if (progress < 100) {
      if (
        progress === 90 &&
        !res.includes("✨") &&
        !res.includes("semi_output")
      ) {
        setProgress((prev) => prev - 10);
      }
      setProgress((prev) => prev + 10);
    }

    if (
      progress !== 90 &&
      (res.includes("✨") || res.includes("semi_output"))
    ) {
      setProgress(100);
    }

    setRes(res);
    setIsLoading(false);
  };

  return (
    <>
      <Column>
        <ProgressBar progress={progress} />
        <Chatting
          chatMessage={chatMessage}
          isLoading={isLoading}
          preInput={preInput}
        />
        <div style={{ height: "10px" }} />
        <Input
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          wrapCount={wrapCount}
          setWrapCount={setWrapCount}
          progress={progress}
          isLoading={isLoading}
        />
        <div style={{ height: "10px" }} />
        <Body6>
          Brandon이 부정확한 정보를 표시할 수 있으므로 내용을 한 번 더
          확인하세요.
        </Body6>
      </Column>
    </>
  );
};

export default WebChat;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 89vh;
  color: white;
  z-index: 1;
`;

const Body6 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body6};
  font-weight: 400;
  line-height: ${({ theme }) => theme.LineHeight.Body6};
`;
