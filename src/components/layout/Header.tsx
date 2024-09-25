/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const headerStyle = css`
  display: flex;
  align-items: center;
  background-color: #0a033a;
  padding: 30px 20px;
  position: relative; /* position을 relative로 설정 */
`;

const logoStyle = css`
  width: 220px;
  display: flex;
  position: absolute; /* 로고를 절대 위치로 설정 */
  left: 40px; /* 왼쪽 여백 */
`;
const logoImg = css`
  width: 100%;
`;
const navStyle = css`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  gap: 90px;
  flex: 1; /* 공간 차지 */
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
const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>
        <img css={logoImg} src="/assets/logo.svg" alt="logo" />
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
    </header>
  );
};

export default Header;
