import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Input from "./Input";
import Chatting from "./Chatting";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { AIMessage } from "langchain/schema";

const WebChat = () => {
  const [input, setInput] = useState("");
  const [chatModelResult, setChatModelResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo-16k",
    temperature: 0.2,
  });

  const target = "김진서";

  const template = `We're building a service that helps people discover strengths and things they don't know they have, things they love, in a chat with GPT, and you'll be the one asking the questions. From now on, act as a personal branding counselor who helps the ${target} to find who they are and help ${target} personal branding. You have been doing this job for more than 10 years so you are an expert on doing this job. By your help, ${target} should have explored themselves enough and they know who they are like, able to know how to start and continue their personal branding, find a direction or a niche for their own brand concept and how to brand themselves in the future.
  
  ${target}: A junior who don't know how to do personal branding, who did not explored about themselves, who struggles to analyze themselves, who didn't know how to create their own brand concept, who didn’t know how to perform following their personal brand.
  
  Proceed in the following order. All of the process must be done in only Korean. You must only ask question. Do not answer your question.
  
  I. You must ask 10 questions one by one to ${target} to analyze ${target} and help ${target} personal branding. You will ask one question and wait for user response. If there is no response, do not continue the question. Do not create reply by yourself. The questions should be very polite and you should give continuous compliment to the ${target}. First question should start with asking ${target} name. After first question, you should call ${target} by his or her name.On later questions, You should ask follow question in 1 to 8 list one by one.
  1. What have been some of the meaningful experiences in ${target}’s life?
  2. list important events in ${target}’s life (see life graph).
  2-1. why were events important?
  2-2. What did those events teach you about yourself?
  3. What do ${target} like to do?
  3-1. Do ${target} have any interests?
  4. What are ${target}’s strengths?
  5. What have ${target} misunderstood about ${target}?
  6. What are some of ${target}’s failures and successes?
  7. What ${target} doing now or ${target}’s field, and why do?
  8. Describe ${target}’s future vision or aspirational world
  Remember the question should be only in Korean.
  
  II. After 10 questions, take the user's answers and break them down into below formats.
  {{
    [feature]: Analyze the target's answers from questions 1 to 8 and determine the specific job the target will perform. define characteristic of ${target} or job of ${target},
    [attractive]: Analyze the target's answers from questions 1 to 8 and determine the target's future behavior. define ${target}'s strength,
    [benefit]: Analyze the target's answers from questions 1 to 8, and determine the benefit that the target's actions bring to the world.Define how ${target} can make a positive impact,
    [Branding Concept]: By analyzing ${target}’s [feature], [attractive], and [benefit], the branding concept of target. [Branding Concept] sentence must all includ Feature, attractive, and benefit elements,
    [Keyword]: Analyze the target's answers to questions 1 to 8 and select 8 to 15 keywords that represent the target.
  }}

  Also, from the user's answers, pick out keywords that have career appeal and create 3 brand messages for the user.
  Do not forget that you must wait for user response after one question.`;

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
    async function fetchData() {
      setIsLoading(true);
      const res = await chain.predict({ answer: "start" });
      setChatModelResult([new AIMessage(res)]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    setInput("");
    setProgress((prev) => prev + 10);
    setIsLoading(true);
    const res = await chain.predict({ answer: input });
    console.log(res);
    setIsLoading(false);
  };

  return (
    <>
      <Overlay />
      <Column>
        <ProgressBar progress={progress} />
        <Chatting chatModelResult={chatModelResult} />
        <Input input={input} setInput={setInput} handleSubmit={handleSubmit} />
      </Column>
    </>
  );
};

export default WebChat;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 89vh;
  padding: 13px 0;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 투명한 레이어 색상 및 투명도 조절 */
`;
