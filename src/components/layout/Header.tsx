/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const headerStyle = css`
  display: flex;
  align-items: center;
  background-color: ##020010;
  padding: 30px 20px;
  position: absolute; /* position을 relative로 설정 */
  top: 0;
  width: 100%;
  z-index: 100; /* footer 위에 */
`;

const logoStyle = css`
  width: 250px;
  padding: 20px;
  display: flex;
  position: absolute; /* 로고를 절대 위치로 설정 */
  left: 40px; /* 왼쪽 여백 */
  cursor: pointer;
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
    </header>
  );
};

export default Header;
