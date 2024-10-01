/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query"; // 최신 버전의 경우 사용
import { fetchMedicalData } from "../../api/apis.ts"; // API 호출 함수 import
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import
import {
  TabContainer,
  TabStyle,
  StatusBox,
  UlStyle,
  LiStyle,
  linkStyle,
} from "../../styles/MainPageStyle"; // MainPage 스타일 import
import { Link } from "react-router-dom";

// Country 타입 정의
interface Country {
  clean_water_use_rate: number;
  clean_water_use_rate_year: number;
  country_eng_nm: string;
  country_iso_alp2: string;
  country_nm: string;
  current_travel_alarm: string;
  tuber_pr_hndrd_thsnd_ppl_outbreak_rate: number;
  tuber_pr_hndrd_thsnd_ppl_outbreak_rate_year: number;
}

// 응답 타입 정의
interface MedicalResponse {
  currentCount: number;
  data: Country[];
}

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("전체");

  // React Query를 사용해 데이터 가져오기
  const { data, isLoading, error } = useQuery<MedicalResponse, Error>({
    queryKey: ["medicalData"], // 쿼리 키
    queryFn: fetchMedicalData, // 쿼리 함수
    staleTime: 1000 * 60 * 60 * 6, // 데이터가 6시간 동안 신선하다고 간주 (6시간)
    gcTime: 1000 * 60 * 60 * 6, // 데이터가 6시간 동안 캐시에 남아 있음 (6시간)
  });

  const countriesData = data?.data || [];

  // 검색어 입력 변경 처리
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  // 탭 클릭 시 처리
  const handleTabClick = (status: string) => {
    setSelectedTab(status);
    setSearchQuery("");
  };

  // 필터링된 국가 데이터
  const filteredCountries = countriesData.filter((country: Country) => {
    const travelStatus = country.current_travel_alarm?.split(":")[0] || "0단계";
    const matchesTab = selectedTab === "전체" || travelStatus === selectedTab;
    const matchesSearch =
      country.country_nm.includes(searchQuery) ||
      country.country_eng_nm.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  // 로딩 상태 및 오류 처리
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>국가/지역별 정보</h1>
      <p css={pStyle}>
        국가/지역별 현지 연락처, 사건 사고정보, 문화 등 다양한 정보를
        제공합니다.
      </p>
      <Input value={searchQuery} onInputChange={handleInputChange} />
      <div css={TabContainer}>
        {[
          { label: "전체", text: "전체" },
          { label: "0단계", text: "0단계 경보없음" },
          { label: "1단계", text: "1단계 여행유의" },
          { label: "2단계", text: "2단계 여행자제" },
          { label: "3단계", text: "3단계 출국권고" },
          { label: "4단계", text: "4단계 여행금지" },
          { label: "5단계", text: "5단계 특별여행주의보" },
        ].map(({ label, text }) => (
          <div
            css={[
              TabStyle,
              label === "전체" && { flex: "none", width: "80px" },
            ]}
            key={label}
            onClick={() => handleTabClick(label)}
          >
            {label !== "전체" && (
              <div
                css={StatusBox}
                style={{ backgroundColor: getStatusColor(label) }}
              />
            )}
            <span
              style={{
                color: "#F0F0F0",
                fontSize: 16,
                fontFamily: "Pretendard Variable",
                fontWeight: "600",
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
      <ul css={UlStyle}>
        {filteredCountries.map((country: Country) => {
          const travelStatus =
            country.current_travel_alarm?.split(":")[0] || "0단계";
          return (
            <li css={LiStyle} key={country.country_iso_alp2}>
              <div
                css={StatusBox}
                style={{ backgroundColor: getStatusColor(travelStatus) }}
              />
              <Link to={`/details/${country.country_iso_alp2}`} css={linkStyle}>
                {country.country_nm}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// 여행 상태에 따른 색상 반환 함수
const getStatusColor = (status: string) => {
  switch (status) {
    case "0단계":
      return "#FFFFFF";
    case "1단계":
      return "#2A70FF";
    case "2단계":
      return "#00FFA3";
    case "3단계":
      return "#FFF738";
    case "4단계":
      return "#FF6636";
    case "5단계":
      return "#FF07D7";
    default:
      return "#FFFFFF";
  }
};

export default MainPage;
