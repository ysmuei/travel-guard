/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const warningCon = css`
  position: absolute;
  width: auto;
  display: flex;
  padding: 20px;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #7fa9ff60;
  flex-direction: column;
  left: 150px;
  bottom: 150px;
  background: rgb(127, 169, 255);
  background: linear-gradient(
    169deg,
    rgba(127, 169, 255, 0.2) 0%,
    rgba(0, 0, 0, 0.6041010154061625) 60%
  );

  @media (max-width: 768px) {
    left: 30px;
    bottom: 70px;
    font-size: 12px;
    padding: 0 10px;
    gap: 0px;
  }
`;

const statusCon = css`
  display: flex;
  align-items: center;
`;
const statusBox = css`
  width: 14px;
  height: 14px;
  margin-right: 10px;
  border-radius: 2px;
`;
const WarningLevel = () => {
  return (
    <div css={warningCon}>
      <div css={statusCon}>
        <div css={statusBox} style={{ backgroundColor: "#FFFFFF" }}></div>
        <p>0단계 경보없음</p>
      </div>
      <div css={statusCon}>
        <div css={statusBox} style={{ backgroundColor: "#2A70FF" }}></div>
        <p>1단계 여행유의</p>
      </div>
      <div css={statusCon}>
        <div css={statusBox} style={{ backgroundColor: "#00FFA3" }}></div>
        <p>2단계 여행자제</p>
      </div>
      <div css={statusCon}>
        <div css={statusBox} style={{ backgroundColor: "#FFF738" }}></div>
        <p>3단계 출국권고</p>
      </div>
      <div css={statusCon}>
        <div css={statusBox} style={{ backgroundColor: "#FF6636" }}></div>
        <p>4단계 여행금지</p>
      </div>
      <div css={statusCon}>
        <div css={statusBox} style={{ backgroundColor: "#FF07D7" }}></div>
        <p>5단계 특별여행주의보</p>
      </div>
    </div>
  );
};

export default WarningLevel;
