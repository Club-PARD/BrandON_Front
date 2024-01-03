import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isLogined = atom({
  key: "isLogined",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const recoilUserID = atom({
  key: "recoilUserID",
  default: localStorage.getItem("userID"),
  effects_UNSTABLE: [persistAtom],
});
export const recoilUserData = atom({
  key: "userData",
  default: {
    name: "",
    email: "",
    picture: "",
  },
  effects_UNSTABLE: [persistAtom],
});
export const isFirstLogin = atom({
  key: "isFirstLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const nickname = atom({
  key: "nickname",
  default: "",
  effects_UNSTABLE: [persistAtom],
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
        brandStory: {
          brandStoryId: 1,
          brandKeywords: [""],
          storyTitles: [""],
          storyTexts: [""],
          resources: "",
          target: "",
          suggestions: "",
        },
        brandCard: {
          brandCardId: 0,
          identity: "",
          identity_explanation: "",
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
