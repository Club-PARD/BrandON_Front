import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonCard from "../../../../Assets/Arrow.png";
import StoryImg from "../../../../Assets/Story_Img.png";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import Brandon from "../../../../Assets/brandon_final.gif";
import CardWhite from "../../../../Assets/Card_White.png";
import CardBlue from "../../../../Assets/Card_Blue.png";
import CardPurple from "../../../../Assets/Card_Purple.png";
import CardPink from "../../../../Assets/Card_Pink.png";

const WebOutput = () => {
  // const [userData, setUserData] = useRecoilState(recoilUserAllResults);
  const [chatroom, setChatroom] = useState([]);
  const [badAccess, setBadAccess] = useState(false);

  const getChatroomData = async () => {
    try {
      const userID = localStorage.getItem("userID");
      const chatRoomId = localStorage.getItem("chatRoomID");
      const data = await axios.get(
        `${process.env.REACT_APP_URL}/${userID}/${chatRoomId}/myResult`
      );
      console.log(data.data);
      setChatroom(data.data);
    } catch (error) {
      console.log(error);
      setBadAccess(true);
    }
  };

  const chatRoomIdS = localStorage.getItem("chatRoomID");
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
    getChatroomData();
  }, []);

  useEffect(() => {
    if (badAccess) {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [badAccess]);

  // console.log(userData);
  console.log(chatroom);
  // console.log(chatroom.answers);
  console.log(chatRoomIdS);

  // useEffect(() => {
  //   for (let i = 0; i < userData.chatRooms.length; i++) {
  //     if (userData.chatRooms[i].chatRoomId == chatRoomIdS) {
  //       setChatroom(userData.chatRooms[i]);
  //     }
  //   }
  // }, [userData])

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(1);

  const identityToggleHandler = () => {
    setToggle(1);
  };
  const storyToggleHandler = () => {
    setToggle(2);
  };
  const chatToggleHandler = () => {
    setToggle(3);
  };

  const downloadHandler = () => {
    const element = document.getElementById("Card");
    if (element instanceof HTMLElement) {
      html2canvas(element).then((canvas) => {
        onSaveAs(canvas.toDataURL("image/png"), "BrandON_Identity.png");
      });
    }
  };

  const onSaveAs = (uri, filename) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const downloadImageHandler = () => {
    const input = document.getElementById("pdf");

    if (!input) {
      console.error("Element with ID pdf not found");
      return;
    }

    // 원래 배경색을 저장합니다.
    const originalBackgroundColor = input.style.backgroundColor;

    // 이미지 다운로드를 위해 배경색을 변경합니다.
    input.style.backgroundColor = "#111111"; // 원하는 색상 코드로 변경하세요.
    input.style.borderRadius = "0px";

    html2canvas(input, {
      scale: 1,
      logging: true,
      useCORS: true,
    })
      .then((canvas) => {
        // 캔버스에서 이미지 데이터 URL을 가져옵니다.
        const imgData = canvas.toDataURL("image/png");

        // 이미지 데이터 URL을 사용하여 이미지를 다운로드합니다.
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "BrandON_Story.png"; // 다운로드할 이미지의 파일 이름
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 이미지 다운로드 후, 배경색을 원래 색상으로 복원합니다.
        input.style.backgroundColor = originalBackgroundColor;
      })
      .catch((error) => {
        console.error("Error creating image:", error);

        // 에러가 발생한 경우에도 원래 색상으로 복원합니다.
        input.style.backgroundColor = originalBackgroundColor;
      });
    input.style.borderRadius = "2.5rem";
    input.style.backgroundColor = "#000000";
  };

  const downloadPDFHandler2 = () => {
    const input = document.getElementById("pdf2");

    if (!input) {
      console.error("Element with ID pdf not found");
      return;
    }

    // 원래 배경색을 저장합니다.
    const originalBackgroundColor = input.style.backgroundColor;

    // PDF 다운로드를 위해 배경색을 변경합니다.
    input.style.backgroundColor = "#222222"; // 원하는 색상 코드로 변경하세요.
    input.style.borderRadius = "0px";

    html2canvas(input, {
      scale: 1,
      logging: true,
      useCORS: true,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("BrandON_ChatLog.pdf");

        // PDF 다운로드 후, 배경색을 원래 색상으로 복원합니다.
        input.style.backgroundColor = originalBackgroundColor;
      })
      .catch((error) => {
        console.error("Error creating PDF:", error);

        // 에러가 발생한 경우에도 원래 색상으로 복원합니다.
        input.style.backgroundColor = originalBackgroundColor;
      });
    input.style.backgroundColor = "#000000";
    input.style.borderRadius = "2.5rem";
  };

  const arrowHandler = () => {
    navigate("/history");
  };
  const ImgList = [CardWhite, CardPink, CardPurple, CardBlue];

  return (
    <Div>
      {
        {
          1: (
            <Div style={{}}>
              <Div
                style={{
                  width: "20%",
                  height: "94.5vh",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <Div
                  style={{
                    width: "20%",
                    height: "10%",
                    justifyContent: "start",
                    alignItems: "start",
                    margin: "3.875rem 0 0 7.1875rem",
                  }}
                >
                  <ArrowImg
                    src={ButtonCard}
                    style={{ margin: "0 0 0 0" }}
                    onClick={arrowHandler}
                  />
                </Div>
              </Div>
              <Div style={{ width: "60%", alignItems: "start" }}>
                <Div
                  style={{
                    flexDirection: "column",
                    width: "41.875rem",
                    height: "39.375rem",
                    background: "",
                    borderRadius: "1.25rem",
                    margin: "1.5625rem 0 0 0",
                  }}
                >
                  <Div style={{ height: "15%", alignItems: "start" }}>
                    <Div
                      style={{
                        width: "40.375rem",
                        height: "3.75rem",
                        background: "#D9D9D9",
                        borderRadius: "6.25rem",
                        justifyContent: "space-between",
                        margin: "1.4375rem 0 0 0",
                        padding: "0 0.5rem 0 0.5rem",
                        boxSizing: "border-box",
                      }}
                    >
                      <Concept
                        onClick={identityToggleHandler}
                        style={{
                          width: "33%",
                          height: "3.1875rem",
                          margin: "0 0 0 0",
                          background: "#ffffff",
                          borderRadius: "1.875rem",
                          boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
                          fontSize: "1.25rem",
                          fontWeight: "600",
                        }}
                      >
                        아이덴티티
                      </Concept>
                      <Story
                        onClick={storyToggleHandler}
                        style={{ width: "34%" }}
                      >
                        <Div
                          style={{
                            width: "100%",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#ABABAB",
                            justifyContent: "center",
                            margin: "0 0 0 0",
                          }}
                        >
                          스토리
                        </Div>
                      </Story>
                      <Chat
                        onClick={chatToggleHandler}
                        style={{ width: "33%" }}
                      >
                        <Div
                          style={{
                            width: "100%",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#ABABAB",
                            justifyContent: "end",
                            margin: "0 4.3125rem 0 0",
                          }}
                        >
                          채팅 기록
                        </Div>
                      </Chat>
                    </Div>
                  </Div>
                  <Div style={{ height: "70%", alignItems: "end" }}>
                    <Card
                      id="Card"
                      style={{
                        display: "block",
                        width: "42.1875rem",
                        height: "23.4375rem",
                        fontSize: "2rem",
                        margin: "1.875rem 0 0.5rem 0",
                      }}
                    >
                      <Div style={{ display: "block", position: "relative" }}>
                        <Div
                          style={{
                            position: "absolute",
                            backgroundColor: "none",
                            opacity: 1,
                            top: "0",
                            left: "0",
                            zIndex: "3",
                          }}
                        >
                          <Div style={{ width: "55.6%" }}></Div>
                          <Div
                            style={{ flexDirection: "column", width: "44.4%" }}
                          >
                            <Div
                              style={{
                                alignItems: "end",
                                padding: "0rem 0.875rem 0rem 0.875rem",
                                height: "35%",
                                boxSizing: "border-box",
                              }}
                            >
                              {(chatroom.chatRoomId - 1) % 4 >= 2 ? (
                                <Div
                                  style={{
                                    fontSize: "2.25rem",
                                    fontWeight: "600",
                                    justifyContent: "start",
                                    alignItems: "bottom",
                                    height: "20%",
                                    color: "white",
                                    margin: "0 0 0.5rem 0",
                                  }}
                                >
                                  {chatroom?.chatNickName}
                                </Div>
                              ) : (
                                <Div
                                  style={{
                                    fontSize: "2.25rem",
                                    fontWeight: "600",
                                    justifyContent: "start",
                                    alignItems: "bottom",
                                    height: "20%",
                                    margin: "0 0 0.5rem 0",
                                  }}
                                >
                                  {chatroom?.chatNickName}
                                </Div>
                              )}
                            </Div>
                            <Div
                              style={{
                                alignItems: "center",
                                padding: "0.4rem 0.875rem 0rem 0.875rem",
                                height: "10%",
                                boxSizing: "border-box",
                              }}
                            >
                              {(chatroom.chatRoomId - 1) % 4 >= 2 ? (
                                <Div
                                  style={{
                                    fontSize: "1.3125rem",
                                    fontWeight: "500",
                                    justifyContent: "start",
                                    alignItems: "bottom",
                                    height: "100%",
                                    color: "white",
                                  }}
                                >
                                  {chatroom?.brandCard?.identity || ""}
                                </Div>
                              ) : (
                                <Div
                                  style={{
                                    fontSize: "1.3125rem",
                                    fontWeight: "500",
                                    justifyContent: "start",
                                    alignItems: "bottom",
                                    height: "100%",
                                  }}
                                >
                                  {chatroom?.brandCard?.identity || ""}
                                </Div>
                              )}
                            </Div>
                            <Div
                              style={{
                                alignItems: "start",
                                padding: "1rem 0.875rem 0rem 0.875rem",
                                height: "25%",
                                boxSizing: "border-box",
                              }}
                            >
                              {(chatroom.chatRoomId - 1) % 4 >= 2 ? (
                                <Div
                                  style={{
                                    fontSize: "0.9375rem",
                                    fontWeight: "400",
                                    justifyContent: "start",
                                    alignItems: "start",
                                    height: "80%",
                                    lineHeight: "125%",
                                    color: "white",
                                  }}
                                >
                                  {chatroom?.brandCard?.identity_explanation ||
                                    ""}
                                </Div>
                              ) : (
                                <Div
                                  style={{
                                    fontSize: "0.9375rem",
                                    fontWeight: "400",
                                    justifyContent: "start",
                                    alignItems: "start",
                                    height: "80%",
                                    lineHeight: "125%",
                                  }}
                                >
                                  {chatroom?.brandCard?.identity_explanation ||
                                    ""}
                                </Div>
                              )}
                            </Div>
                            <Div
                              style={{
                                alignItems: "start",
                                padding: "0rem 0.875rem 0rem 0.875rem",
                                height: "25%",
                                boxSizing: "border-box",
                              }}
                            >
                              {(chatroom.chatRoomId - 1) % 4 >= 2 ? (
                                <Div
                                  style={{
                                    height: "80%",
                                    lineHeight: "125%",
                                    justifyContent: "start",
                                  }}
                                >
                                  <Div
                                    style={{
                                      width: "fit-content",
                                      fontSize: "0.9rem",
                                      fontWeight: "600",
                                      justifyContent: "start",
                                      alignItems: "start",
                                      margin: "0 0.3rem 0 0",
                                      color: "white",
                                    }}
                                  >
                                    {"#" +
                                      chatroom?.brandStory?.brandKeywords[0]}
                                  </Div>
                                  <Div
                                    style={{
                                      width: "fit-content",
                                      fontSize: "0.9rem",
                                      fontWeight: "600",
                                      justifyContent: "start",
                                      alignItems: "start",
                                      margin: "0 0.3rem 0 0",
                                      color: "white",
                                    }}
                                  >
                                    {"#" +
                                      chatroom?.brandStory?.brandKeywords[1]}
                                  </Div>
                                  <Div
                                    style={{
                                      width: "fit-content",
                                      fontSize: "0.9rem",
                                      fontWeight: "600",
                                      justifyContent: "start",
                                      alignItems: "start",
                                      margin: "0 0.3rem 0 0",
                                      color: "white",
                                    }}
                                  >
                                    {"#" +
                                      chatroom?.brandStory?.brandKeywords[2]}
                                  </Div>
                                </Div>
                              ) : (
                                <Div
                                  style={{
                                    height: "80%",
                                    lineHeight: "125%",
                                    justifyContent: "start",
                                  }}
                                >
                                  <Div
                                    style={{
                                      width: "fit-content",
                                      fontSize: "0.9rem",
                                      fontWeight: "600",
                                      justifyContent: "start",
                                      alignItems: "start",
                                      margin: "0 0.3rem 0 0",
                                    }}
                                  >
                                    {"#" +
                                      chatroom?.brandStory?.brandKeywords[0]}
                                  </Div>
                                  <Div
                                    style={{
                                      width: "fit-content",
                                      fontSize: "0.9rem",
                                      fontWeight: "600",
                                      justifyContent: "start",
                                      alignItems: "start",
                                      margin: "0 0.3rem 0 0",
                                    }}
                                  >
                                    {"#" +
                                      chatroom?.brandStory?.brandKeywords[1]}
                                  </Div>
                                  <Div
                                    style={{
                                      width: "fit-content",
                                      fontSize: "0.9rem",
                                      fontWeight: "600",
                                      justifyContent: "start",
                                      alignItems: "start",
                                      margin: "0 0.3rem 0 0",
                                    }}
                                  >
                                    {"#" +
                                      chatroom?.brandStory?.brandKeywords[2]}
                                  </Div>
                                </Div>
                              )}
                            </Div>
                          </Div>
                        </Div>
                        <Img src={ImgList[(chatroom.chatRoomId - 1) % 4]}></Img>
                      </Div>
                    </Card>
                  </Div>
                  <Div style={{ height: "15%", alignItems: "start" }}>
                    <Download
                      onClick={downloadHandler}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        margin: "1.9375rem 0 0 0",
                      }}
                    >
                      다운로드
                    </Download>
                  </Div>
                </Div>
              </Div>
              <Div style={{ width: "20%" }}></Div>
            </Div>
          ),
          2: (
            <Div
              style={{
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Div
                style={{
                  width: "10%",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <Div
                  style={{
                    width: "20%",
                    height: "10%",
                    justifyContent: "start",
                    alignItems: "start",
                    margin: "3.875rem 0 0 7.1875rem",
                  }}
                >
                  <ArrowImg
                    src={ButtonCard}
                    style={{ margin: "0 0 0 0" }}
                    onClick={arrowHandler}
                  />
                </Div>
              </Div>
              <Div style={{ width: "80%", alignItems: "start" }}>
                <Div
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    borderRadius: "1.25rem",
                    margin: "1.5625rem 0 0 0",
                  }}
                >
                  <Div style={{ height: "15%", alignItems: "start" }}>
                    <Div
                      style={{
                        width: "40.375rem",
                        height: "3.75rem",
                        background: "#D9D9D9",
                        borderRadius: "6.25rem",
                        justifyContent: "space-between",
                        margin: "1.4375rem 0 0 0",
                        padding: "0 0.5rem 0 0.5rem",
                        boxSizing: "border-box",
                      }}
                    >
                      <Concept
                        onClick={identityToggleHandler}
                        style={{ width: "33%" }}
                      >
                        <Div
                          style={{
                            width: "100%",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#ABABAB",
                            justifyContent: "start",
                            margin: "0 0 0 3.875rem ",
                          }}
                        >
                          아이덴티티
                        </Div>
                      </Concept>
                      <Story
                        onClick={storyToggleHandler}
                        style={{
                          width: "34%",
                          height: "3.1875rem",
                          margin: "0 0 0 0",
                          background: "#ffffff",
                          borderRadius: "1.875rem",
                          boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
                          fontSize: "1.25rem",
                          fontWeight: "600",
                        }}
                      >
                        스토리
                      </Story>
                      <Chat
                        onClick={chatToggleHandler}
                        style={{ width: "33%" }}
                      >
                        <Div
                          style={{
                            width: "100%",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#ABABAB",
                            justifyContent: "end",
                            margin: "0 4.3125rem 0 0",
                          }}
                        >
                          채팅 기록
                        </Div>
                      </Chat>
                    </Div>
                  </Div>
                  <Div
                    style={{ height: "70%", margin: "4.375rem 0 4.375rem 0" }}
                  >
                    <Div
                      id="pdf"
                      style={{
                        flexDirection: "column",
                        width: "100%",
                        background: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "2.5rem",
                        padding: "5.9375rem 7.1875rem 5.9375rem 7.1875rem",
                        boxSizing: "border-box",
                      }}
                    >
                      <Div style={{ width: "100%", alignItems: "start" }}>
                        <Div style={{ width: "60%", flexDirection: "column" }}>
                          <Div
                            style={{
                              height: "30%",
                              color: "white",
                              justifyContent: "start",
                              alignItems: "center",
                              padding: "1rem 0 2rem 0",
                            }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                fontSize: "3rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.chatNickName || ""}
                            </Div>
                          </Div>
                          <Div
                            style={{
                              height: "20%",
                              color: "white",
                              justifyContent: "start",
                              fontSize: "1.75rem",
                              fontWeight: "600",
                              padding: "0 0 2.5rem 0",
                            }}
                          >
                            {chatroom?.brandCard?.identity || ""}
                          </Div>
                          <Div
                            style={{
                              height: "50%",
                              color: "#C9C9C9",
                              justifyContent: "start",
                              fontSize: "1.25rem",
                            }}
                          >
                            {" "}
                            {chatroom?.brandCard?.identity_explanation || ""}
                          </Div>
                        </Div>
                        <Div style={{ width: "40%", justifyContent: "end" }}>
                          <StoryImgTag src={StoryImg} />
                        </Div>
                      </Div>
                      <Hr />
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "600",
                            margin: "0 0 2.5rem 0",
                          }}
                        >
                          브랜드 키워드
                        </Div>
                        <Div style={{ alignItems: "start" }}>
                          <Div
                            style={{
                              height: "100%",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                margin: "0 0 2.5rem 0",
                              }}
                            >
                              {chatroom?.brandStory?.brandKeywords[0] || ""}
                            </Div>
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.brandStory?.brandKeywords[3] || ""}
                            </Div>
                          </Div>
                          <Div
                            style={{
                              height: "100%",
                              flexDirection: "column",
                              justifyContent: "start",
                            }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                margin: "0 0 2.5rem 0",
                              }}
                            >
                              {chatroom?.brandStory?.brandKeywords[1] || ""}
                            </Div>
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.brandStory?.brandKeywords[4] || ""}
                            </Div>
                          </Div>
                          <Div
                            style={{ height: "100%", flexDirection: "column" }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                margin: "0 0 2.5rem 0",
                              }}
                            >
                              {chatroom?.brandStory?.brandKeywords[2] || ""}
                            </Div>
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.brandStory?.brandKeywords[5] || ""}
                            </Div>
                          </Div>
                        </Div>
                      </Div>
                      <Hr />
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "600",
                            margin: "0 0 2.5rem 0",
                          }}
                        >
                          브랜드 스토리
                        </Div>
                        <Div
                          style={{ height: "100%", flexDirection: "column" }}
                        >
                          <Div
                            style={{ height: "100%", flexDirection: "column" }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#ffffff",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.brandStory?.storyHeadlines[0] || ""}
                            </Div>
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.25rem",
                                margin: "0 0 2.5rem 0",
                              }}
                            >
                              {chatroom?.brandStory?.storyContents[0] || ""}
                            </Div>
                          </Div>
                          <Div
                            style={{ height: "100%", flexDirection: "column" }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#ffffff",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.brandStory?.storyHeadlines[1] || ""}
                            </Div>
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.25rem",
                                margin: "0 0 2.5rem 0",
                              }}
                            >
                              {chatroom?.brandStory?.storyContents[1] || ""}
                            </Div>
                          </Div>
                          <Div
                            style={{ height: "100%", flexDirection: "column" }}
                          >
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#ffffff",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              }}
                            >
                              {chatroom?.brandStory?.storyHeadlines[2] || ""}
                            </Div>
                            <Div
                              style={{
                                justifyContent: "start",
                                color: "#C9C9C9",
                                fontSize: "1.25rem",
                              }}
                            >
                              {chatroom?.brandStory?.storyContents[2] || ""}
                            </Div>
                          </Div>
                        </Div>
                      </Div>
                      <Hr />
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "600",
                            margin: "0 0 2.5rem 0",
                          }}
                        >
                          브랜드 역량
                        </Div>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "#C9C9C9",
                            fontSize: "1.25rem",
                            width: "",
                          }}
                        >
                          {chatroom?.brandStory?.competency || ""}
                        </Div>
                      </Div>
                      <Hr />
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "600",
                            margin: "0 0 2.5rem 0",
                          }}
                        >
                          브랜드 타겟
                        </Div>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "#C9C9C9",
                            fontSize: "1.25rem",
                          }}
                        >
                          {chatroom?.brandStory?.target || ""}
                        </Div>
                      </Div>
                      <Hr />
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "600",
                            margin: "0 0 2.5rem 0",
                          }}
                        >
                          브랜드 성장 전략
                        </Div>
                        <Div
                          style={{
                            justifyContent: "start",
                            color: "#C9C9C9",
                            fontSize: "1.25rem",
                          }}
                        >
                          {chatroom?.brandStory?.strategy || ""}
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                  <Div style={{ height: "15%", alignItems: "end" }}>
                    <Download
                      onClick={downloadImageHandler}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        margin: "0 0 1.9375rem 0",
                      }}
                    >
                      다운로드
                    </Download>
                  </Div>
                </Div>
              </Div>
              <Div style={{ width: "10%" }}></Div>
            </Div>
          ),
          3: (
            <Div
              style={{
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Div
                style={{
                  width: "10%",

                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <Div
                  style={{
                    width: "20%",
                    height: "10%",
                    justifyContent: "start",
                    alignItems: "start",
                    margin: "3.875rem 0 0 7.1875rem",
                  }}
                >
                  <ArrowImg
                    src={ButtonCard}
                    style={{ margin: "0 0 0 0" }}
                    onClick={arrowHandler}
                  />
                </Div>
              </Div>
              <Div style={{ width: "80%", alignItems: "start" }}>
                <Div
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    borderRadius: "1.25rem",
                    margin: "1.5625rem 0 0 0",
                  }}
                >
                  <Div style={{ height: "15%", alignItems: "start" }}>
                    <Div
                      style={{
                        width: "40.375rem",
                        height: "3.75rem",
                        background: "#D9D9D9",
                        borderRadius: "6.25rem",
                        justifyContent: "space-between",
                        margin: "1.4375rem 0 0 0",
                        padding: "0 0.5rem 0 0.5rem",
                        boxSizing: "border-box",
                      }}
                    >
                      <Concept
                        onClick={identityToggleHandler}
                        style={{ width: "33%" }}
                      >
                        <Div
                          style={{
                            width: "100%",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#ABABAB",
                            justifyContent: "start",
                            margin: "0 0 0 3.875rem",
                          }}
                        >
                          아이덴티티
                        </Div>
                      </Concept>
                      <Story
                        onClick={storyToggleHandler}
                        style={{ width: "34%" }}
                      >
                        <Div
                          style={{
                            width: "100%",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#ABABAB",
                            justifyContent: "center",
                            margin: "0 0 0 0",
                          }}
                        >
                          스토리
                        </Div>
                      </Story>
                      <Chat
                        onClick={chatToggleHandler}
                        style={{
                          width: "33%",
                          height: "3.1875rem",
                          margin: "0 0 0 0",
                          background: "#ffffff",
                          borderRadius: "1.875rem",
                          boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
                          fontSize: "1.25rem",
                          fontWeight: "600",
                        }}
                      >
                        채팅 기록
                      </Chat>
                    </Div>
                  </Div>
                  <Div
                    style={{ height: "70%", margin: "4.375rem 0 4.375rem 0" }}
                  >
                    <Div
                      id="pdf2"
                      style={{
                        flexDirection: "column",
                        width: "100%",
                        background: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "2.5rem",
                        padding: "5.9375rem 7.1875rem 5.9375rem 7.1875rem",
                        boxSizing: "border-box",
                      }}
                    >
                      <Div style={{ flexDirection: "column" }}>
                        {chatroom?.answers?.map((answer, key) => (
                          <ChatContainerBrandon>
                            {key % 2 === 0 ? (
                              <ChatContainerBrandon>
                                <ChatName>
                                  <BrandonImg
                                    src={Brandon}
                                    alt="브랜든 이미지"
                                  ></BrandonImg>
                                  <div style={{ width: "0.625rem" }} />
                                  <Body4>
                                    브랜딩 어시스턴트 <b>Brandon</b>
                                  </Body4>
                                </ChatName>
                                <div style={{ height: "0.625rem" }} />
                                <ChatBubbleBrandon>
                                  <Div
                                    style={{
                                      height: "50%",
                                      color: "white",
                                      justifyContent: "start",
                                      fontSize: "1rem",
                                      fontWeight: "300",
                                      lineHeight: "1.7",
                                    }}
                                  >
                                    <Pre>{answer}</Pre>
                                  </Div>
                                </ChatBubbleBrandon>
                              </ChatContainerBrandon>
                            ) : (
                              <Div style={{ justifyContent: "end" }}>
                                <ChatBubbleUser>
                                  <Div
                                    style={{
                                      height: "50%",
                                      color: "white",
                                      justifyContent: "end",
                                      fontSize: "1rem",
                                      lineHeight: "1.7",
                                      fontWeight: "400",
                                    }}
                                  >
                                    <Pre>{answer}</Pre>
                                  </Div>
                                </ChatBubbleUser>
                              </Div>
                            )}
                          </ChatContainerBrandon>
                        ))}
                      </Div>
                    </Div>
                  </Div>
                  <Div style={{ height: "15%", alignItems: "end" }}>
                    <Download
                      onClick={downloadPDFHandler2}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        margin: "0 0 1.9375rem 0",
                      }}
                    >
                      다운로드
                    </Download>
                  </Div>
                </Div>
              </Div>
              <Div style={{ width: "10%" }}></Div>
            </Div>
          ),
        }[toggle]
      }
    </Div>
  );
};

export default WebOutput;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.0313rem solid black; */
  border-radius: 0rem;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const Concept = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    cursor: pointer;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    cursor: pointer;
  }
`;

const Chat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    cursor: pointer;
  }
`;

const Download = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  border-radius: 0rem;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  color: white;
  box-sizing: border-box;
  width: 13.125rem;
  height: 3.1875rem;
  left: calc(50% - 13.125rem / 2);
  top: 152.875rem;
  background: rgba(255, 255, 255, 0.1);
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 1.5854rem -1.5854rem 1.5854rem rgba(194, 194, 194, 0.1),
    inset -1.5854rem 1.5854rem 1.5854rem rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.5854rem);
  border-radius: 1.25rem;
  &:hover {
    cursor: pointer;
    background: #2b2d36;
  }
`;

const BrandonImg = styled.img`
  width: 2.25rem;
`;

const Img = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  /* border: 1px solid #555555; */
  /* border-radius: 0.625rem; */
  position: ${(props) => props.position || ""};
  object-fit: cover;
  /* &:hover {
    box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.2);;
  } */
`;

const ArrowImg = styled.img`
  width: 1.25rem;
  /* margin: 6.875rem 0 0 2.5rem; */
  border-radius: 0.625rem;
  object-fit: cover;
  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
`;

const StoryImgTag = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  /* margin: 6.875rem 0 0 2.5rem; */
  object-fit: cover;
`;

const Hr = styled.div`
  width: 100%;
  height: 0.0625rem;
  color: white;
  background-color: white;
  margin: 2.5rem 0 2.5rem 0;
`;

const ChatContainerBrandon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border: 0.0313rem solid black; */
`;

const ChatName = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const Body4 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body4};
  font-weight: ${({ theme }) => theme.fontWeights.Body4};
  line-height: ${({ theme }) => theme.LineHeight.Body4};
  font-family: "Pretendard";
`;

const Pre = styled.pre`
  all: unset;
  white-space: pre-wrap;
  font-family: "Pretendard";
  color: white;
  font-size: 1rem;
`;

const ChatBubbleBrandon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 48.75rem;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 1.5rem;
  /* border: 0.0313rem solid black; */
  border-radius: 0 0.625rem 0.625rem 0.625rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(calc(var(--text-field-blur, 6.25rem) / 2));
`;

const ChatBubbleUser = styled.div`
  max-width: 48.75rem;
  padding: 1.5rem;
  margin: 3.125rem 0;
  border-radius: 0.625rem 0.625rem 0 0.625rem;
  background: var(--ver-2-text-field, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(3.125rem);
  /* border: 0.0313rem solid black; */
`;
