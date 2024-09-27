/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const detailCon = css`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  overflow-y: scroll;
  /* 커스텀 스크롤바 */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent; /* 트랙 배경을 투명으로 설정 */
    border-radius: 10px; /* 둥근 트랙 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: white; /* 스크롤바 색상 */
    border-radius: 10px; /* 둥근 스크롤바 */
    border: 3px solid #222; /* 스크롤바와 트랙 간 간격 */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 호버 시 스크롤바 색상 */
  }
`;

export const contriesName = css`
  width: 100%;
  box-sizing: border-box;
  height: 180px;
  padding: 32px;
  border: 1px solid white;
`;

export const detailInfo = css`
  display: flex;
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  border: 1px solid yellow;
`;

export const localImg = css`
  width: 50%;
  aspect-ratio: 1; 
  background-sizing: contain; 
  border: 2px solid green;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column; /* 위아래로 배치 */
  width: 50%;
  height: 100%; /* 부모의 전체 높이를 차지 */
`;

export const halfCon = css`
  flex: 1; /* 50% 높이로 설정 */
  border: 1px solid red; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const embassy = css`
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  border: 2px solid white;
`;
