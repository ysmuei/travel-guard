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
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
  max-width: 700px;
  position: relative;
  z-index: 1001;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
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
