/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo } from "react";
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; 
import {
  listConStyle,
  listHeaderStyle,
  ulStyle,
  listStyle,
} from "../../styles/PermissonEmbassyStyle"; 
import useDataFetching from "../../hooks/useDataFetching";
import { fetchEmbassyData } from "../../api/apis"; 

// 대사관 데이터 타입 정의
interface EmbassyData {
  embassy_id: string;
  embassy_kor_nm: string;
  emblgbd_addr: string;
  tel_no: string;
  urgency_tel_no: string;
}

const EmbassyPage = () => {
  // 필터링 함수 메모이제이션
  const filterFunction = useMemo(
    () => (data: any, searchQuery: string) => {
      return data.filter((item: EmbassyData) =>
        item.embassy_kor_nm.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    []
  );

  const {
    data: filteredData,
    isLoading,
    error,
    searchQuery,
    handleInputChange,
  } = useDataFetching({
    queryKey: "embassyData",
    fetchFunction: fetchEmbassyData,
    filterFunction,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>대사관 정보</h1>
      <p css={pStyle}>국가/지역별 대사관 정보를 제공합니다.</p>
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
          {filteredData.map((item: EmbassyData, index: number) => (
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
