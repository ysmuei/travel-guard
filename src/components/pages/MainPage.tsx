/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchMedicalData } from "../../api/medicalAPI"; // API 호출 함수 import
import Input from "../common/Input";
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import

// Country 타입 정의
interface Country {
  clean_water_use_rate: number; // 깨끗한 물 사용 비율
  clean_water_use_rate_year: number; // 깨끗한 물 사용 비율 기준 연도
  country_eng_nm: string; // 국가 영어 이름
  country_iso_alp2: string; // 국가 ISO 3166-1 alpha-2 코드
  country_nm: string; // 국가 한글 이름
  current_travel_alarm: string; // 현재 여행 경고
  tuber_pr_hndrd_thsnd_ppl_outbreak_rate: number; // 결핵 발생률
  tuber_pr_hndrd_thsnd_ppl_outbreak_rate_year: number; // 결핵 발생률 기준 연도
}

// 응답 타입 정의
interface MedicalResponse {
  currentCount: number; // 현재 국가 수
  data: Country[]; // Country 객체 배열
}

// 탭 스타일
const TabContainer = css`
  width: 100%;
  display: flex; // Flexbox를 사용하여 탭을 수평으로 정렬
  padding: 12px 0px; // 위아래, 좌우 패딩
  background: linear-gradient(0deg, rgba(8.11, 8.11, 8.11, 0.80) 0%, rgba(8.11, 8.11, 8.11, 0.80) 100%), radial-gradient(35.07% 23.67% at 27.00% 15.51%, rgba(127, 169, 255, 0.20) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 8px;
  border: 1px rgba(127, 169, 255, 0.60) solid;
  gap: 8px; // 탭 간 간격
  overflow-x: auto; // 탭이 넘칠 경우 가로 스크롤 생성
`;

// 각 탭 스타일
const TabStyle = css`
  flex: 1; // 각 탭이 동일한 너비를 가지도록 설정
  min-width: 80px; // 최소 너비 설정
  height: 40px; // 각 탭의 높이
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  background-color: rgba(0, 0, 0, 0.3); // 기본 배경 색상

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// 상태 박스 스타일
const StatusBox = css`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 2px;
`;

const UlStyle = css`
  width: 100%;
  height: 350px;
  margin: 0 auto;
  border: 1px solid white;
  overflow-y: scroll; // 세로 스크롤 활성화
  display: flex;
  justify-content: center; 
  flex-wrap: wrap; // 플렉스 항목이 줄 바꿈
  gap: 20px; // 항목 간 간격
`;

const LiStyle = css`
  width: calc(16.66% - 10px); // 6개 항목을 가로로 배치할 수 있는 너비
  min-width: 120px; // 최소 너비 설정
  height: 48px; // 고정 높이
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1); // 배경 색상
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); // 하단 경계선
  color: white; // 글자 색상
  transition: background 0.3s ease; // 배경 색상 변화

  &:hover {
    background: rgba(255, 255, 255, 0.2); // 호버 효과
  }
`;

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("전체");

  // react-query를 이용하여 API 데이터 fetch
  const { data, error, isLoading } = useQuery<MedicalResponse, Error>("medicalData", fetchMedicalData);

  const countriesData = data?.data || []; // data.key에서 data 배열을 가져옴

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    console.log("검색어:", value);
  };

  // 탭 클릭 핸들러
  const handleTabClick = (status: string) => {
    setSelectedTab(status);
    console.log(`${status} 탭 클릭됨`);
  };

  // 국가 필터링 함수
  const filteredCountries = countriesData.filter((country: Country) => {
    const travelStatus = country.current_travel_alarm?.split(":")[0] || "0단계"; // 상태 추출
    const matchesTab = selectedTab === "전체" || travelStatus === selectedTab;
    const matchesSearch = country.country_nm.includes(searchQuery) || country.country_eng_nm.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div css={mainStyle}>
      <h1 css={h1Style}>국가/지역별 정보</h1>
      <p css={pStyle}>
        국가/지역별 현지 연락처, 사건 사고정보, 문화 등 다양한 정보를 제공합니다.
      </p>
      <Input onInputChange={handleInputChange} />
      <div css={TabContainer}>
        {["전체", "0단계", "1단계", "2단계", "3단계", "4단계", "5단계"].map((label) => (
          <div
            css={TabStyle}
            key={label}
            onClick={() => handleTabClick(label)}
          >
            <div css={StatusBox} style={{ backgroundColor: getStatusColor(label) }} />
            <span style={{ color: '#F0F0F0', fontSize: 12, fontFamily: 'Pretendard Variable', fontWeight: '600' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <ul css={UlStyle}>
        {filteredCountries.map((country: Country) => {
          const travelStatus = country.current_travel_alarm?.split(":")[0] || "0단계"; // 상태 추출
          return (
            <li css={LiStyle} key={country.country_iso_alp2}>
              <div css={StatusBox} style={{ backgroundColor: getStatusColor(travelStatus) }} />
              {country.country_nm}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// 상태 색상 반환 함수
const getStatusColor = (status: string) => {
  switch (status) {
    case '0단계':
      return '#FFFFFF';
    case '1단계':
      return '#2A70FF';
    case '2단계':
      return '#00FFA3';
    case '3단계':
      return '#FFF738';
    case '4단계':
      return '#FF6636';
    case '5단계':
      return '#FF07D7';
    default:
      return '#FFFFFF';
  }
};

export default MainPage;
