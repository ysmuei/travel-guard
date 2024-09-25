/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  const footerStyle = css`
    position: absolute;
    bottom: 0;
    background-color: #020010;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center; // 세로 가운데 정렬
    overflow: hidden; // 내용이 넘치면 보이지 않도록
  `;

  const logoContainerStyle = css`
    display: flex;
    animation: move 25s linear infinite; // 애니메이션 적용
    white-space: nowrap; // 텍스트가 줄 바꿈되지 않도록
    gap: 20px; // 로고 간격
  `;

  const logoStyle = css`
    height: 20px; // 로고 높이 조절
    margin: 0 10px; // 로고 간격
  `;

  // 애니메이션 정의
  const keyframes = css`
    @keyframes move {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div css={footerStyle}>
      <div css={keyframes} />
      <div css={logoContainerStyle}>
        <img css={logoStyle} src="./assets/footerLogo.svg" alt="logo" />
        <img css={logoStyle} src="./assets/footerLogo.svg" alt="logo" />
        <img css={logoStyle} src="./assets/footerLogo.svg" alt="logo" />
        <img css={logoStyle} src="./assets/footerLogo.svg" alt="logo" />
        <img css={logoStyle} src="./assets/footerLogo.svg" alt="logo" />
        <img css={logoStyle} src="./assets/footerLogo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
