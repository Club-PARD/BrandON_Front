import React from "react";
import {atom} from 'recoil';

export const isLogined = atom ({
    key: 'isLogined',
    default: false,
  });
  export const accessTokenState = atom({
    key: 'accessTokenState',
    default: null,
  });
  export const recoilUserID = atom ({
    key: 'recoilUserID',
    default: localStorage.getItem('userID'),
  });
 