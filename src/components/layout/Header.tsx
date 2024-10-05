/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const headerStyle = css`
  display: flex;
  align-items: center;
  background-color: #020010;
  padding: 30px 20px;
  box-sizing: border-box;
  position: absolute; /* 위치 고정 */
  top: 0;
  width: 100%;
  z-index: 100; /* footer 위에 */
  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px 20px;
  }
`;

const logoStyle = css`
  width: 250px;
  padding: 20px;
  display: flex;
  cursor: pointer;
  position: absolute;
  @media (max-width: 768px) {
    position: relative;
    

  }
`;

const logoImg = css`
  width: 100%;
`;

const navStyle = css`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  gap: 90px;
  flex: 1; /* 공간 차지 */
  @media (max-width: 768px) {
    display: none;
  }
`;

const fontStyle = css`
  color: #f0f0f0;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.88px;
`;

const hamburgerMenuStyle = css`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const mobileNavStyle = (isOpen: boolean) => css`
  display: ${isOpen ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #020010;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
  z-index: 101;

  a {
    color: #f0f0f0;
    font-size: 18px;
    text-decoration: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header css={headerStyle}>
      <div css={logoStyle}>
        <Link to="/">
          <img css={logoImg} src="/assets/logo.svg" alt="logo" />
        </Link>
      </div>
      <nav css={navStyle}>
        <Link to="/main" css={fontStyle}>
          국가별 정보
        </Link>
        <Link to="/permission" css={fontStyle}>
          입국 허가요건
        </Link>
        <Link to="/embassy" css={fontStyle}>
          대사관 정보
        </Link>
      </nav>
      <div
        css={hamburgerMenuStyle}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <img src="/assets/hamBtn.svg" alt="Menu" />
      </div>
      <nav css={mobileNavStyle(isMenuOpen)}>
        <Link to="/main" onClick={() => setIsMenuOpen(false)}>
          국가별 정보
        </Link>
        <Link to="/permission" onClick={() => setIsMenuOpen(false)}>
          입국 허가요건
        </Link>
        <Link to="/embassy" onClick={() => setIsMenuOpen(false)}>
          대사관 정보
        </Link>
      </nav>
    </header>
  );
};

export default Header;
