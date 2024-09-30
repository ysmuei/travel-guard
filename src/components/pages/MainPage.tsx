/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchMedicalData } from "../../api/medicalAPI"; // API 호출 함수 import
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import
import { TabContainer, TabStyle, StatusBox, UlStyle, LiStyle, linkStyle } from "../../styles/MainPageStyle"; // MainPage 스타일 import
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

  const { data, error, isLoading } = useQuery<MedicalResponse, Error>("medicalData", fetchMedicalData);
  const countriesData = data?.data || [];

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleTabClick = (status: string) => {
    setSelectedTab(status);
    setSearchQuery("");
  };

  const filteredCountries = countriesData.filter((country: Country) => {
    const travelStatus = country.current_travel_alarm?.split(":")[0] || "0단계";
    const matchesTab = selectedTab === "전체" || travelStatus === selectedTab;
    const matchesSearch = country.country_nm.includes(searchQuery) || country.country_eng_nm.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>국가/지역별 정보</h1>
      <p css={pStyle}>국가/지역별 현지 연락처, 사건 사고정보, 문화 등 다양한 정보를 제공합니다.</p>
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
            css={[TabStyle, label === "전체" && { flex: "none", width: "80px" }]}
            key={label}
            onClick={() => handleTabClick(label)}
          >
            {label !== "전체" && <div css={StatusBox} style={{ backgroundColor: getStatusColor(label) }} />}
            <span style={{ color: '#F0F0F0', fontSize: 16, fontFamily: 'Pretendard Variable', fontWeight: '600' }}>
              {text}
            </span>
          </div>
        ))}
      </div>
      <ul css={UlStyle}>
        {filteredCountries.map((country: Country) => {
          const travelStatus = country.current_travel_alarm?.split(":")[0] || "0단계";
          return (
            <li css={LiStyle} key={country.country_iso_alp2}>
              <div css={StatusBox} style={{ backgroundColor: getStatusColor(travelStatus) }} />
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
