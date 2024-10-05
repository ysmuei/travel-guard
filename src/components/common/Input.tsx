/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

// Input 스타일
const inputConStyle = css`
  width: 100%; 
  margin: 20px 0;
  display: flex; 
  box-sizing: border-box; 
  align-items: center; 
  border: 1px solid #7FA9FF50;
  border-radius: 16px; // 모서리 둥글게
  padding-left: 16px;

`;
const inputStyle = css`
  width: 100%;
  padding: 20px 10px; // 내부 여백
  color: white;
  font-size: 24px; 
  border: none; // 
  outline: none; // 포커스 시 윤곽선 제거
  background-color: transparent; 
  
  @media (max-width: 768px) {
    padding: 10px 10px;
    font-size: 16px; 
  }
`;

interface InputProps {
  value: string; // 입력값
  onInputChange: (value: string) => void; // 입력값 변화 핸들러
}

const Input: React.FC<InputProps> = ({ value, onInputChange }) => {
  // 입력값 변화 핸들러
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value); // 부모 컴포넌트의 핸들러 호출
  };

  return (
    <div css={inputConStyle}>
      <img src="./assets/searchIcon.svg" alt="" />
      <input
      type="text"
      css={inputStyle}
      value={value} // 현재 입력값 전달
      onChange={handleChange} // 입력값 변화 시 핸들러
      placeholder="국가 명을 입력하세요" // 플레이스홀더
      />
    </div>
    
  );
};

export default Input;
