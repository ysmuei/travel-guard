/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalContentStyle = css`
  background: black;
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  height: 80%;
  max-width: 700px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #7fa9ff60;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 1) 60%
  );
  z-index: 1001;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5); /* 그림자 추가로 입체감 */

  overflow-y: auto; /* 스크롤이 필요할 때 표시 */

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

const closeButtonStyle = css`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  color: #7fa9ff;
  font-size: 30px;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div css={modalOverlayStyle} onClick={onClose}>
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <button css={closeButtonStyle} onClick={onClose}>
          &times; {/* X 문자로 닫기 버튼 표시 */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
