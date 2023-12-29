import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WebHistoryCard from "./WebHistoryCard";
import Woochal from "../../../../Assets/Woochal.png";
import ButtonCard from "../../../../Assets/Button_Card.png";
import Brandon from "../../../../Assets/brandon_final.gif"
import { useNavigate } from "react-router-dom";

const WebHistory = () => {
  const [cards, setCards] = useState([
    {
      cardNum: 1,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
    {
      cardNum: 2,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
    {
      cardNum: 3,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
    {
      cardNum: 4,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },

    {
      cardNum: 5,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },

    {
      cardNum: 6,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },

    {
      cardNum: 7,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },

    {
      cardNum: 8,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },

    {
      cardNum: 9,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
  ]);
  const [forTest, setForTest] = useState(1)
  const [selectCardNum, setSelectCardNum] = useState([0, 1, 2, 3]);
  const [selectedCard, setSelectedCard] = useState([cards[selectCardNum[0]], cards[selectCardNum[1]], cards[selectCardNum[2]], cards[selectCardNum[3]]]);
  const navigate = useNavigate();

  const chatButtonHandler = () => {
    navigate("/chat");
  }

  const cardClickHandler = () => {
    navigate("/output");
  }

  const rightButtonHandler = () => {
    setSelectCardNum((prev) => (prev).map(num => num + 4))
  }

  const leftButtonHandler = () => {
    setSelectCardNum((prev) => (prev).map(num => num - 4))
  }

  useEffect(() => {
    setSelectedCard([cards[selectCardNum[0]], cards[selectCardNum[1]], cards[selectCardNum[2]], cards[selectCardNum[3]]])
  }, [selectCardNum]);

  // console.log(selectCardNum);
  // console.log(cards[selectCardNum[0]], cards[selectCardNum[1]], cards[selectCardNum[2]], cards[selectCardNum[3]]);

  return (
    <Div>
      {forTest === undefined ?
        <Div style={{ flexDirection: "column" }}>
          <Div style={{ height: "40vh", alignItems: "end" }}>
            <Div style={{ height: "10vh", fontSize: "40px", fontWeight: "600", color: "white" }}>
              아직 결과물이 없어요
            </Div>
          </Div>
          <Div style={{ height: "15vh", alignItems: "start" }}>
            <Div style={{ height: "5vh", fontSize: "28px", fontWeight: "300", color: "white" }}>
              Brandon과 이야기해서 결과물을 만들어보세요.
            </Div>
          </Div>
          <Div style={{ height: "30vh", alignItems: "start" }}>
            <Div style={{ height: "5vh", fontSize: "28px", fontWeight: "300", color: "white" }}>
              <Button onClick={chatButtonHandler}>
                <Div style={{ width: "40%", justifyContent: "end" }}><BrandonImg src={Brandon} /></Div>
                <Div style={{ width: "60%", justifyContent: "start", margin: "2px 0 0 20px", color: "white", fontFamily: "Pretendard Variable", fontStyle: "normal", fontWeight: "700", fontSize: "18px", lineHeight: "21px", left: "calc(50% - 94px/2 + 28px)", top: "calc(50% - 21px/2 + 165.5px)" }}>채팅하러가기</Div>
              </Button>
            </Div>
          </Div>
        </Div>
        :
        <Div>
          <Div style={{ width: "18%", justifyContent: "start", height: "50vh" }}>
            {selectCardNum[0] === 0
              ? ""
              :
              <Div style={{ position: "relative", width: "50%", justifyContent: "end" }}>
                <Div style={{ position: "absolute", top: "200px", left: "40px", width: "95px", height: "95px", borderRadius: "50px", backgroundColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(10px)" }}>
                  <Img src={ButtonCard} style={{ transform: "rotate(180deg)", margin: "0 0 0 0" }} />
                </Div>
                <Overlay onClick={leftButtonHandler} style={{ position: "absolute", top: "200px", left: "40px", width: "95px", height: "95px", borderRadius: "50px", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                </Overlay>
              </Div>
            }

          </Div>
          <Div
            style={{
              flexDirection: "column",
              width: "940px",
              margin: "80px 0 0 0",
            }}
          >
            <Div style={{}}>
              <Div
                style={{
                  fontSize: "24px",
                  margin: "0 0 20px 0",
                }}
              >
                <A>현재 1개의 가나다라마바사님의 브랜드 컨셉이 있어요</A>
              </Div>
            </Div>
            <Div
              style={{
                display: "grid",
                boxSizing: "border-box",
                borderRadius: "10px",
                gridGap: "30px 40px",
              }}
            >
              {selectedCard.map((card, index) => (
                <Card>
                  {card === undefined ?
                    <WebHistoryCard undefined={true} />
                    :
                    <WebHistoryCard undefined={false} card={card} cardNum={card.cardNum} imgURL={card.imgURL} brandCard={card.brandCard} brandConcept={card.brandConcept} />}
                  <Overlay onClick={cardClickHandler} />
                </Card>
              ))}
            </Div>
          </Div>
          <Div style={{ width: "18%", justifyContent: "end", height: "50vh" }}>
            {selectedCard[3] === undefined
              ? ""
              :
              <Div style={{ position: "relative", width: "50%", justifyContent: "end" }}>
                <Div style={{ position: "absolute", top: "200px", right: "40px", width: "95px", height: "95px", borderRadius: "50px", backgroundColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(10px)" }}>
                  <Img src={ButtonCard} style={{ margin: "0 0 0 0" }} />
                </Div>
                <Overlay onClick={rightButtonHandler} style={{ position: "absolute", top: "200px", right: "40px", width: "95px", height: "95px", borderRadius: "50px", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                </Overlay>
              </Div>


            }
          </Div>
        </Div>}

    </Div>

  );
};

export default WebHistory;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: "Pretendard";
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 10px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 10px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  position: absolute;
  background-Color: black;
  opacity: 0;
  top: 0;
  /* left: 0; */
  z-Index: 3;
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const Overlay2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    opacity: 0.3;
  }
`;

const A = styled.a`
  color: white;
  /* mix-blend-mode: soft-light; */
  justify-content: start;
  align-items: start;
  width: 100%;
  /* letter-Spacing: -px */
`;

const Img = styled.img`
  width: 20px;
  margin: 110px 0 0 40px;
  border-radius: 10px;
  object-fit: cover;
  &:hover {
    filter: brightness(0.7);
  }
`;

const Button = styled.button`
box-sizing: border-box;
position: absolute;
width: 325px;
height: 51px;
left: calc(50% - 325px/2 + 0.5px);
top: 530px;

background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: inset 25.3667px -25.3667px 25.3667px rgba(194, 194, 194, 0.1), inset -25.3667px 25.3667px 25.3667px rgba(255, 255, 255, 0.1);
backdrop-filter: blur(25.3667px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 20px;

display: flex;
`;

const BrandonImg = styled.img`
  width: 36px;

`;