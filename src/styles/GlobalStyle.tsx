/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const globalStyles = css`
  /* 전역 스타일 설정 */
  body {
    margin: 0;
    padding: 0;
    background-color: #020010; /* 배경색 */

    overflow: hidden;

    color: #f0f0f0;
    font-family: "Pretendard Variable", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.88px;
  }

  /* 추가 스타일 설정 예시 */
  a {
    text-decoration: none; /* 링크 밑줄 제거 */
  }

  a:hover {
    text-decoration: none; /* 링크 호버 시 밑줄 */
  }

  /* 기타 스타일 필요에 따라 추가 */
`;
