/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 탭 스타일
export const TabContainer = css`
  width: 90%;
  display: flex; // Flexbox를 사용하여 탭을 수평으로 정렬
  padding: 10px 0px; // 위아래, 좌우 패딩
  border-radius: 8px;
  gap: 5px; // 탭 간 간격
`;

// 각 탭 스타일
export const TabStyle = css`
  flex: 1; // 각 탭이 동일한 너비를 가지도록 설정
  min-width: 70px; // 최소 너비 설정
  height: 40px; // 각 탭의 높이
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(127, 169, 255, 0.6);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// 상태 박스 스타일
export const StatusBox = css`
  width: 14px;
  height: 14px;
  margin-right: 10px;
  border-radius: 2px;
`;

// 스크롤 스타일이 적용된 목록
export const UlStyle = css`
  width: 100%;
  height: 60%;
  padding: 0px 30px;
  box-sizing: border-box;
  border: 1px solid #7fa9ff60;
  border-radius: 8px;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );
  overflow-y: scroll; // 세로 스크롤 활성화
  display: flex;
  margin-top: 0px;
  flex-wrap: wrap; // 플렉스 항목이 줄 바꿈
  gap: 12px; // 항목 간 간격

  /* 커스텀 스크롤바 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: trasport; /* 스크롤 트랙 배경 */
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

export const LiStyle = css`
  width: 17%; // 6개 항목을 가로로 배치할 수 있는 너비
  min-width: 100px; // 최소 너비 설정
  height: 17%; // 고정 높이
  display: flex;
  align-items: center;
  padding: 10px;
  color: white; // 글자 색상
  transition: background 0.3s ease; // 배경 색상 변화
`;

export const linkStyle = css`
  color: white; /* 기본 색상 */
  text-decoration: none; /* 밑줄 제거 */
  font-size: 18px;
  padding: 5px;
  &:hover {
    color: #7fa9ff; /* 호버 시 색상 변경 */
  }
`;
