import React from "react";
import styled from "styled-components";
import WoochalDead from "../../../Assets/Woochal_Dead.png"

const WebHistoryFeed = (props) => {
  return (
    <Div display="block" width="450px" height="450px" fontSize="32px" margin="10px">
      {props.imgURL === ""
        ?
        <Div display="block" position="relative">
          <Img src={WoochalDead}></Img>
          <Div position="absolute" backgroundColor="#000000" opacity="70%" top="0" left="0" zIndex="1"></Div>
        </Div>
        :
        <Img src={props.imgURL}></Img>}
    </Div>
  );
};

export default WebHistoryFeed;



const Div = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
  padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
  background-color: ${props => props.backgroundColor || 'white'};
  /* border: ${props => props.border || '0.5px solid black'}; */
  border-radius: ${props => props.borderRadius || '10px'};
  box-sizing: ${props => props.boxSizing || 'content-box'};
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '400'};
  /* font-family: ${props => props.fontFamily || 'AppleSDGothicNeo'}; */
  overflow: ${props => props.overflow || ''};
  opacity: ${props => props.opacity || '100%'};
  position: ${props => props.position || ''};
  top: ${props => props.top || ''};
  left: ${props => props.left || ''};
  z-Index: ${props => props.zIndex || ''};
  top: ${props => props.top || ''};
`;

const Img = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius : 10px;
  position: ${props => props.position || ''};
`;