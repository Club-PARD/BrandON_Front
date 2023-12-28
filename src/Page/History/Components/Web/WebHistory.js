import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WebHistoryCard from "./WebHistoryCard";
import Woochal from "../../../../Assets/Woochal.png";
import ButtonCard from "../../../../Assets/Button_Card.png";

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
  const [selectCardNum, setSelectCardNum] = useState([0, 1, 2, 3]);
  const [selectedCard, setSelectedCard] = useState([cards[selectCardNum[0]], cards[selectCardNum[1]], cards[selectCardNum[2]], cards[selectCardNum[3]]]);

  const leftButtonHandler = () => {
    setSelectCardNum((prev) => (prev).map(num => num + 4))
  }

  const rightButtonHandler = () => {
    setSelectCardNum((prev) => (prev).map(num => num - 4))
  }

  useEffect(() => {
    setSelectedCard([cards[selectCardNum[0]], cards[selectCardNum[1]], cards[selectCardNum[2]], cards[selectCardNum[3]]])
  }, [selectCardNum]);

  // console.log(selectCardNum);
  // console.log(cards[selectCardNum[0]], cards[selectCardNum[1]], cards[selectCardNum[2]], cards[selectCardNum[3]]);

  return (
    <Div>
      <Div style={{ width: "18%", justifyContent: "start", height: "50vh" }}>
        {selectCardNum[0] === 0
          ? ""
          : <Img src={ButtonCard} onClick={rightButtonHandler} />
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
              <Overlay />
            </Card>
          ))}
        </Div>
      </Div>
      <Div style={{ width: "18%", justifyContent: "end", height: "50vh" }}>
        {selectedCard[3] === undefined
          ? ""
          : <Img src={ButtonCard} onClick={leftButtonHandler} style={{ margin: "110px 40px 0 0", transform: "rotate(180deg)" }} />
        }

      </Div>
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
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 28.125rem;
  height: 15.625rem;
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
  left: 0;
  z-Index: 3;
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
  width: 95px;
  margin: 110px 0 0 40px;
  border-radius: 10px;
  object-fit: cover;
  &:hover {
    filter: brightness(0.7);
  }
`;
