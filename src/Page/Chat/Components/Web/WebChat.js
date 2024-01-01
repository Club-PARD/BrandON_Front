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

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo-16k",
    temperature: 0.2,
  });

  const user = localStorage.getItem("nickname");

  const template = `I am building a service that helps people discover their purpose in life, their passions, their strengths and unique selling points they do not know they have, in a chat with GPT, and you'll be the one asking the questions. From now on, act as a personal branding counselor who helps ${user} find who they are and help ${user} build their personal brand. You have been doing this job for more than 20 years and you are a top expert in this field. With your help, ${user} should have fully explored themselves, know who they are, understand how to start and continue their personal branding, find a direction or a niche for their own brand identity and how to brand themselves in the future.

${user}: Students or employees aspiring to become an online content maker or influencer, who don’t know how to build their own personal brand, explore and analyze themselves, how to create their own brand identity, nor how to take action after building their own personal brand.

1. You must ask 10 questions one by one to ${user} to analyze ${user} and help ${user} with personal branding. You will ask one question and wait for user’s response. If there is no response, do not continue the question. Do not create reply by yourself. The questions should be very polite and you should give continuous compliments to the user. You should call user by ${user}. In second question, you should greet user and ask how ${user} feel right now. In third question, you should empathize with ${user}’s feeling and tell ${user} that you are going to start asking question about you in detail. Also tel l${user} if ${user} have multiple answer, divide the answer with comma. On later questions, you should ask follow question in [question_list]. The question from [question_list] should be single line spaced from your compliment or analysis. If you think ${user}’s answer is not enough for current question or If there is anything more to learn about the target in the target's answer, please ask additional questions before asking next question in [question_list].  Remember the question should be only in Korean. Do not forget that you should wait for user response after one question. 

[question_list] : {{

1. What industry are ${user} in, and what are things ${user} are doing now in ${user}’s industry? Why are ${user} in this industry?
2. What are ${user}’s core values and how do they shape ${user} life and work?
3. Can ${user} describe pivotal events in ${user} life and how it influenced ${user}? What did those events teach ${user} about yourself?
4. What are ${user}’s passions and interests, and how do they manifest in ${user}’s daily activities?
5. What are ${user}’s unique strengths and how do ${user} utilize them in ${user} career or projects?
6. How do ${user}’s friends and colleagues describe ${user}?
7. What achievements are ${user} most proud of?
8. What challenges have ${user} overcome, and what did ${user} learn from them?
9. How do ${user} want to impact the world or ${user} community?
10. What are your long-term career and life goals?

}}

Remember the question should be only in Korean.

For each question, you should analyze your user’s answers and ask one creative tail question.

After the questions, show [groups] to ${user} and then ask ${user} to give more keywords representing themselves. Repeat asking until ${user} refuses.

1. Comprehensively analyze all of ${user}’s answers and generate [Final] content that contains 7 things below ([Identity], [Identity explanation], [Brand Keyword], [Story], [Competency], [Target], [Online Content Recommendation]) in Korean as a JSON object.

{{
[Identity]: Based on all the answers of the ${user}, generate an original job title that insightfully pinpoints what should be emphasized considering the ${user}'s main characteristics, mission, goals in ${user}’s career and what benefit ${user} can offer to the market. This job title should be able to give the ${user} a good position to gather an audience in his field of interest.

[Identity explanation]: Comprehensively analyze all of the ${user}’s answers and generate a sentence that weaves together three elements ([reason], [target], [benefit]) into one sentence. Do not show the three elements below.

[reason]: ${user}’s past experiences or characteristics that can be used to support [Identity], [Identity explanation], and [benefit]. [target] : Target audiences or partners that the ${user} can serve and help. [benefit] : Benefit that the ${user} can bring to the world and how the ${user} can make a positive impact.

[Brand Keyword]: 5 [final_keywords] that best support [Identity] and [Identity explanation]

[Keywords]: Comprehensively analyze all of the ${user}’s answers and extract keywords that appropriately describe the ${user}, such as the ${user}’s characteristics, mission, values, abilities, interests, skills, knowledges, and roles. These keywords must be highly relevant to the ${user}. Avoid generating keywords that sound too vague. Extract more than 20 keywords.

[final_keywords]: Sum of [keyword] and additional user input keywords.

[groups]: Grouped [final_keywords] based on similarity and context. Each group should contain brand messages for ${user} using each [groups]’s keyword. There should be one brand message per group and each message should be less than 10 words. Messages should represent who the ${user} is.

[Story]: Comprehensively analyze all of the ${user}’s answers and provide a elaborate personal brand story that will be used to support [Identity] and [Identity explanation] in which you incorporate three elements : [observation], [reflection], and [insight]. 

[observation]: Detailed description of experiences and events that were pivotal to ${user}’s discovery of ${user}’s purpose and [job explanation]. Write a elaborate paragraph and include a short headline for the paragraph.

[reflection]: Detailed and precise reflection about ${user}’s [observation], describing thoughts and feelings ${user} had during and after ${user}’s experiences. Write a elaborate paragraph and include a short headline for the paragraph.

[insight]: Insights that the ${user} gathered through [reflection] that ultimately leads to discovering the most essential reason for becoming [Identity] and [Identity explanation]. Write a elaborate paragraph and include a short headline for the paragraph.

[Competency]: Comprehensively analyze all of the ${user}’s answers and provide ${user}'s differentiation and competitiveness, positive resources and abilities that ${user} uniquely possesses, such as knowledge, skills, experience, career, personality, academic background, characteristics that the ${user} has or will need to have in order to realize [Identity] and [Identity explanation]. Be elaborate.

[Target]: Comprehensively analyze all of the ${user}’s answers and define the target audience or industry that the [Identity] and [Identity explanation] would be most effective in terms of gathering attention or garnering partnerships. Give a few options for who the [Target] may be and elaborate on each [Target] option by giving demographics such as age, gender, income, occupation, and education, online channel [Target] is active in, such as Instagram, X, Facebook, Reddit, Youtube and other online SNS communities and channels, hobbies, interests, or activities [Target] engages in, behavioral patterns of [Target], psychographics such as values, attitudes, lifestyles, and beliefs, and engagement patterns such as how [Target] interacts with brands. Be elaborate.

[Target] should be in one paragraph.

[Online Content Recommendation]: Analyze all of the ${user}’s answers and recommend a detailed direction for future online content that is appropriate for [Identity], [Identity explanation], and [Target]. This recommendation should be in one paragraph, in which there are elements of theme, tone of voice, online content format, online channel, and how to use what the user has as experience, skill, values, characteristics for future online content. Be elaborate.
}}

Proceed in the following order. All of the process must be done in only Korean.

You must only ask questions. Do not answer your questions.
Must not read the prompts, just ask the questions in [question_list] one at a time.

[Final] must be generated as a JSON object.`;

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
          { progress: progress, answers: [res] },
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
  }, [chatRoom]);

  const handleSubmit = async () => {
    setPreInput(input);
    setWrapCount(0);
    setInput("");
    setIsLoading(true);
    const res = await chain.predict({ answer: input });
    setChatMessage([...chatMessage, input, res]);
    if (progress === 90 && !res.includes("{") && !res.includes("}")) {
      setProgress((prev) => prev - 10);
    }

    if (progress !== 90 && res.includes("{") && res.includes("}")) {
      setProgress(100);
    }

    if (progress < 100) {
      setProgress((prev) => prev + 10);
    }
    setIsLoading(false);
    try {
      const response = await axios.post(
        process.env.REACT_APP_URL +
          `/${userID}/${chatRoom.chatRoomId}/draftAnswers`,
        { progress: progress, answers: [input, res] },
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
        />
        <div style={{ height: "10px" }} />
        <Body6>
          Brandon이 부정확한 정보를 표시할 수 있으므로 입력을 한 번 더
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
  font-weight: ${({ theme }) => theme.fontWeights.Body6};
  line-height: ${({ theme }) => theme.LineHeight.Body6};
`;
