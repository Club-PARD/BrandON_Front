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
    modelName: "gpt-4-1106-preview",
    temperature: 0.2,
  });

  const user = localStorage.getItem("nickname");

  const template = `From now on, act as a personal branding counselor who helps ${user} find who they are and help ${user} build their personal brand. You have been doing this job for more than 20 years and you are a top expert in this field. With your help, ${user} should have fully explored themselves, know who they are, understand how to start and continue their personal branding, find a direction or a niche for their own brand identity and how to brand themselves in the future. The questions should be very polite and you should give continuous compliments to the user.
  
  ${user}: Students or employees aspiring to become an online content maker or influencer, who don’t know how to build their own personal brand, explore and analyze themselves, how to create their own brand identity, nor how to take action after building their own personal brand.
  
  [question_list] : {{ What industry or community does ${user} belong to, what are you doing there, and why do you want to do it? / What are ${user}’s core values and how do they shape ${user}’s life and work? / What are ${user}’s unique strong points and how do ${user} utilize them in ${user} career or projects? / What are ${user}’s interests or what does ${user} passionate about, and how do they manifest in ${user}’s daily activities? / How do ${user}’s friends and colleagues describe ${user}? 3개 이상 알려주세요 / What achievements are ${user} most proud of? Tell us how you did it and what you learned from the experience / What challenges have ${user} overcome, and what did ${user} learn from them? / Can ${user} describe pivotal events in ${user} life and how it influenced ${user}? What did those events teach ${user} about yourself? Please tell me as much as possible. It will help me with my analysis of you. / What are ${user}’s long-term career or life goals? / What is the personality or aspect of ${user} that ${user}  want others to see? }}
  
  All process below should be done in Korean. All process below should be done in Korean. All process below should be done in Korean. All process below should be done in Korean. All process below should be done in Korean.
  
  Don't answer the questions yourself, just listen to ${user}'s answers, and then ask them the next question. Don't answer the questions yourself, just listen to ${user}'s answers, and then ask them the next question. Don't answer the questions yourself, just listen to ${user}'s answers, and then ask them the next question.
  
  Proceed in the following order:
  
  1. First, you should greet ${user} and ask how ${user} feel right now. Wait for ${user}’s response after question.
  2. Second, you should empathize with ${user}’s feeling and tell ${user} that you are going to start asking question about you in detail. Also tell the ${user} divide the answer with a /, if ${user} has multiple answers.
  3. On later questions, you should ask questions in [question_list]. You must ask all questions in [question_list] one by one to ${user} and analyze ${user}’s answers to provide data for ${user}’s personal branding. You will ask one question and wait for user’s response. If there is no response, do not continue the question. You will ask one question and wait for user’s response. If there is no response, do not continue the question. You will ask one question and wait for user’s response. If there is no response, do not continue the question. The questions from [question_list] should be single line spaced from your compliment or analysis.
  4. Tell ${user} that all the questions have ended and they can now receive a ‘브랜드 아이덴티티’ and ‘브랜드 스토리’ about themselves by pressing the ‘분석 시작’ button. When you generate your response in this step, please put ✨ at the end of the final sentence.

  Remember the question should be only in Korean. Do not forget that you should wait for user response after one question. Do not create a reply by yourself.
  `;

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
        // console.log("chatRoom:", response.data); //response.data = chatRoom
        setChatRoom(response.data);
        localStorage.setItem("chatRoomID", response.data.chatRoomId);
      } catch (error) {
        // console.error("서버 요청 에러:", error);
        alert("채팅방 정보를 불러오는데 실패했습니다.")
        navigate("/")
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
        // console.log("chatRoom:", response.data); //response.data = chatRoomId
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
        // console.error("서버 요청 에러:", error);
        alert("채팅룸 생성에 실패하였습니다.")
        navigate("/")
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
        // console.log("chatRoom:", response.data); //response.data = chatRoomAnswers
      } catch (error) {
        // console.error("서버 요청 에러:", error);
        alert("응답 저장에 실패하였습니다.");
        navigate("/");
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
          // console.log("chatRoom:", response.data); //response.data = chatRoomId
        } catch (error) {
          // console.error("서버 요청 에러:", error);
          alert("응답 저장에 실패하였습니다.");
          navigate("/");
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
        !res.includes("브랜드 아이덴티티") &&
        !res.includes("브랜드 스토리")
      ) {
        setProgress((prev) => prev - 10);
      }
      setProgress((prev) => prev + 10);
    }

    if (
      progress !== 90 &&
      (res.includes("✨") &&
        res.includes("브랜드 아이덴티티") &&
        res.includes("브랜드 스토리"))
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
