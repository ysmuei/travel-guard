/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import
import { listConStyle, listHeaderStyle, ulStyle, listStyle } from "../../styles/PermissonEmbassyStyle"; // PermissonPage 스타일 import
import { fetchPermissionData } from "../../api/apis"; // fetch 함수 import

// 입국 허가 요건 데이터 타입 정의
interface PermissionData {
  국가: string;
  "일반여권소지자-입국가능기간": string;
  "일반여권소지자-입국가능여부": string;
  "입국시 소지여부": string;
}

const PermissonPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [permissionData, setPermissionData] = useState<PermissionData[]>([]);
  
  // 페이지 로드 시 데이터 가져오기
  useEffect(() => {
    const loadPermissionData = async () => {
      try {
        const data = await fetchPermissionData();
        setPermissionData(data.data); // API에서 'data' 필드에 접근
      } catch (error) {
        console.error("Error loading permission data:", error);
      }
    };

    loadPermissionData();
  }, []);

  // Input 컴포넌트에서 입력된 값이 변경될 때 호출되는 함수
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    console.log("검색어:", value);
  };

  // 검색어에 맞는 데이터를 필터링
  const filteredData = permissionData.filter(item =>
    item["국가"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>국가별 입국 허가요건</h1>
      <p css={pStyle}>
        국가별 입국 가능여부, 입국시 소지여부,
        입국 자격, 입국안내 등 다양한 정보를 제공합니다.
      </p>
      {/* Input 컴포넌트에 handleInputChange 전달 */}
      <Input value={searchQuery} onInputChange={handleInputChange} />
      <div css={listConStyle}>
        <div css={listHeaderStyle}>
          <p css={css({ flex: 2 })}>국가</p>
          <p css={css({ flex: 3 })}>입국가능기간</p>
          <p css={css({ flex: 1.1 })}>입국가능여부</p>
          <p css={css({ flex: 1.4 })}>입국시 소지여부</p>
        </div>
        <ul css={ulStyle}>
          {filteredData.map((item, index) => (
            <li key={index} css={listStyle}>
              <p css={css({ flex: 2, })}>{item["국가"]}</p>
              <p css={css({ flex: 3, })}>{item["일반여권소지자-입국가능기간"]}</p>
              <p css={css({ flex: 1, })}>{item["일반여권소지자-입국가능여부"]}</p>
              <p css={css({ flex: 1, })}>{item["입국시 소지여부"]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PermissonPage;
