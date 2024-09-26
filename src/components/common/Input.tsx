/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

// 스타일 정의
const inputConStyle = css`
  width: 90%;
  padding: 10px;
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`;

const inputStyle = css`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  line-style: none;
  color: #f0f0f0;
`;

interface InputProps {
  onInputChange: (value: string) => void; // 부모 컴포넌트로 값을 전달하는 함수
}

const Input: React.FC<InputProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // 입력값 업데이트
    onInputChange(value); // 부모 컴포넌트로 값 전달
  };

  return (
    <div css={inputConStyle}>
      <img src="./assets/searchIcon.svg" alt="search icon" />
      <input
        css={inputStyle}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="대륙 또는 국가명을 입력하세요"
      />
    </div>
  );
};

export default Input;
