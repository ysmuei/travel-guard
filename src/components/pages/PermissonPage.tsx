/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import

const PermissonPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Input 컴포넌트에서 입력된 값이 변경될 때 호출되는 함수
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    // 검색 로직을 여기에 추가 (API 호출 또는 데이터 필터링)
    console.log("검색어:", value);
  };

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>국가별 입국 허가요건</h1>
      <p css={pStyle}>
        국가별 입국 허가요건, 입국 신청서,
        입국 자격, 입국안내 등 다양한 정보를 제공합니다.
      </p>
      {/* Input 컴포넌트에 handleInputChange 전달 */}
      <Input value={searchQuery} onInputChange={handleInputChange} />
      {/* API 호출 및 데이터 표시 */}
      {/* 예시: <SearchResults query={searchQuery} /> */}
    </div>
  );
};

export default PermissonPage;
