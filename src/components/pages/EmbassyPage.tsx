/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import
import { listConStyle, listHeaderStyle, ulStyle, listStyle } from "../../styles/PermissonEmbassyStyle"; // EmbassyPage 스타일 import
import { fetchEmbassyData } from "../../api/embassyAPI"; // fetch 함수 import

// 대사관 데이터 타입 정의
interface EmbassyData {
  embassy_id: string;
  embassy_kor_nm: string;
  emblgbd_addr: string;
  tel_no: string;
  urgency_tel_no: string;
}

const EmbassyPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [embassy, setEmbassy] = useState<EmbassyData[]>([]);
 
  
  useEffect(() => {
    const loadEmbassyData = async () => {
      try {
        const data = await fetchEmbassyData();
        setEmbassy(data.data); // API에서 'data' 필드에 접근
      } catch (error) {
        console.error("Error loading embassy data:", error);
      }
    };
    loadEmbassyData();
  }, []);

  // Input 컴포넌트에서 입력된 값이 변경될 때 호출되는 함수
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    console.log("검색어:", value);
  };

  const filteredData = embassy.filter((item) =>
    item.embassy_kor_nm.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>대사관 정보</h1>
      <p css={pStyle}>
        국가/지역별 대사관 정보를 제공합니다.
      </p>
      {/* Input 컴포넌트에 handleInputChange 전달 */}
      <Input value={searchQuery} onInputChange={handleInputChange} />
      <div css={listConStyle}>
        <div css={listHeaderStyle}>
          <p css={css({ flex: 1.1 })}>제외공관 한글명</p>
          <p css={css({ flex: 2 })}>제외공관 주소</p>
          <p css={css({ flex: 1.1 })}>대표전화번호</p>
          <p css={css({ flex: 1 })}>긴급전화번호</p>
        </div>
        <ul css={ulStyle}>
          {filteredData.map((item, index) => (
            <li key={`${item.embassy_id}-${index}`} css={listStyle}>
              <div css={css({ flex: 1 })}>{item.embassy_kor_nm}</div>
              <div css={css({ flex: 2 })}>{item.emblgbd_addr}</div>
              <div css={css({ flex: 1 })}>{item.tel_no}</div>
              <div css={css({ flex: 1 })}>{item.urgency_tel_no}</div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default EmbassyPage;
