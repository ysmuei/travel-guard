/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const mainStyle = css`
    height: 70%;
    width: 80%;
    color: #f0f0f0;
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      height: 70%;
      width: 90%;
      top: 100px;
    }
  `;
export const h1Style = css`
    font-size: 32px;
    font-weight: 600;
    padding: 10px 0;
    @media (max-width: 768px){
      font-size: 24px;
    }
  `;
export const pStyle = css`
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 768px){
      font-size: 16px;
    }
  `;