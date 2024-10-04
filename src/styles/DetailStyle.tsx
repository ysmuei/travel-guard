/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const detailCon = css`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding-bottom: 50px;
  overflow-y: scroll;
  box-sizing: border-box;

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
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 180px;
  padding: 0 32px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #7fa9ff60;
  gap: 20px;
  margin-bottom: 32px;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );
`;

export const detailInfo = css`
  display: flex;
  width: 100%;
  gap: 20px;
  box-sizing: border-box;
  height: 100%;
`;

export const localImg = css`
  width: 50%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #7fa9ff60;
  background-sizing: contain;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column; /* 위아래로 배치 */
  gap: 20px;
  width: 50%;
  height: 100%; /* 부모의 전체 높이를 차지 */
`;

export const newsCon = css`
  flex: 1; /* 50% 높이로 설정 */
  border: 1px solid #7fa9ff60;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px 50px;
  box-sizing: border-box;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );
`;
export const newsHeader = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 3px solid #7fa9ff;
  padding: 20px;
`;

export const newsList = css`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 2px solid #5e5e5e;
  padding: 20px;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.05;
  }
`;

export const embassyListStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  padding: 20px;
`;

export const embassyCon = css`
  flex: 1; /* 50% 높이로 설정 */
  border: 1px solid #7fa9ff60;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  border-radius: 8px;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );
`;
export const embassyHeader = css`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border-bottom: 3px solid #7fa9ff;
  padding: 20px;
`;

export const embassy = css`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  height: auto;
  padding: 20px;
  border: 1px solid #7fa9ff60;
  border-radius: 8px;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );
`;
export const embassyListCon = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
