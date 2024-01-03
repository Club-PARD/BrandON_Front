import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isLogined = atom({
  key: "isLogined",
  default: false,
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: null,
});
export const recoilUserID = atom({
  key: "recoilUserID",
  default: localStorage.getItem("userID"),
});
export const recoilUserData = atom({
  key: "userData",
  default: {
    name: "",
    email: "",
    picture: "",
  },
});
export const isFirstLogin = atom({
  key: "isFirstLogin",
  default: null,
});
export const nickname = atom({
  key: "nickname",
  default: "",
});
export const recoilUserAllResults = atom({
  key: "recoilUserAllResults",
  default: {
    userId: 0,
    name: "string",
    email: "string",
    nickname: "string",
    chatRooms: [
      {
        chatRoomId: 1,
        progress: 0,
        finishChat: false,
        chatNickName: "",
        keywords: [],
        answers: [],
        groupKeywords: {},
        brandCard: {
          brandCardId: 0,
          identity: "",
          identity_explanation: "",
        },
        brandStory: {
          brandStoryId: 1,
          identity: "",
          identity_explanation: "",
          brandKeywords: [""],
          storyHeadlines: [""],
          storyContents: [""],
          competency: "",
          target: "",
          contentsRecommendation: "",
        },
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});

export const noCard = atom({
  key: "noCard",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
