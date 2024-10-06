import { css } from "@emotion/react";

export const listConStyle = css`
    width: 100%;
    height: 75%;
    border: 1px solid #7FA9FF60;
    
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px; 
    background: rgb(127,169,255);
    background: linear-gradient(169deg, rgba(127,169,255,0.2) 0%, rgba(0,0,0,0.6041010154061625) 60%);
    
    @media (max-width: 768px) {
      font-size: 12px;
      height: 85%;
    }
`;

export const listHeaderStyle = css`
    top: 0; // 상단에 고정
    width: 100%;
    color: #7FA9FF;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center; // 세로 정렬 맞춤
    padding: 10px;
    border-bottom: 2px solid #7FA9FF;
    z-index: 1; // 다른 요소 위에 위치
`;


export const listHeader2Style = css`
    display: flex;
    flex: 1; // 동일한 비율 설정
    flex-direction: row;
    justify-content: space-around; //
    gap: 40px; // 간격을 적절히 조정
    align-items: center; // 세로 정렬 맞춤
`;

export const listStyle = css`
    display: flex;
    flex: 1; // 동일한 비율 설정
    color: #F0F0F0;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 10px;
    justify-content: space-around; //
    border-bottom: 1px solid #F0F0F0;
    gap: 30px; // 간격을 적절히 조정
    align-items: center; // 세로 정렬 맞춤
`;

export const ulStyle = css`
    overflow-y: scroll;
    color: #F0F0F0;
    /* 커스텀 스크롤바 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: trasport;       /* 스크롤 트랙 배경 */
    border-radius: 10px;    /* 둥근 트랙 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: white; /* 스크롤바 색상 */
    border-radius: 10px;       /* 둥근 스크롤바 */
    border: 3px solid #222;    /* 스크롤바와 트랙 간 간격 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 호버 시 스크롤바 색상 */
  }
`
