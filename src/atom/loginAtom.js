import React from "react";
import { atom } from "recoil";

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
  default: false,
});
export const nickname = atom({
  key: "nickname",
  default: '',
});
export const recoilUserAllResults = atom({
  key: "recoilUserAllResults",
  default: {
    "userId": 0,
    "name": "string",
    "email": "string",
    "nickname": "string",
    "chatRooms": [
      {
        "chatRoomId": 0,
        "userId": 0,
        "finishChat": true,
        "chatNickName": "string",
        "keywords": [
          "string"
        ],
        "answers": [
          "string"
        ],
        "brandStory": {
          "brandStoryId": 0,
          "resources": [
            "string"
          ],
          "slogan": "string",
          "suggestions": [
            "string"
          ],
          "niches": [
            "string"
          ]
        },
        "brandCard": {
          "brandCardId": 0,
          "brandJob": "string",
          "jobDetail": "string"
        }
      }
    ]
  },
});