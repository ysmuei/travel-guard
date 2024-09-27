/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

// Input 스타일
const inputStyle = css`
  width: calc(100% - 20px); 
  margin: 20px 0;
  border: none; // 경계선 제거
  padding: 20px 10px; // 내부 여백
  color: white;
  font-size: 24px; 
  border-radius: 4px; // 모서리 둥글게
  outline: none; // 포커스 시 윤곽선 제거
  background-color: transparent; 

  &:focus {
    border-color: #2A70FF; // 포커스 시 경계선 색상 변경
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
    <input
      type="text"
      css={inputStyle}
      value={value} // 현재 입력값 전달
      onChange={handleChange} // 입력값 변화 시 핸들러
      placeholder="국가 명을 입력하세요" // 플레이스홀더
    />
  );
};

export default Input;
