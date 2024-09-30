/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from 'react';
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import
import { useParams } from "react-router-dom";
import { fetchNationalData } from '../../api/nationalImgAPI'; // API 요청 함수 import
import { detailCon, contriesName, detailInfo, localImg, textContainer, newsCon, embassy, embassyCon } from "../../styles/DetailStyle"; // DetailPage 스타일 import

interface CountryData {
  alarm_lvl: number;
  continent_cd: string;
  continent_eng_nm: string;
  continent_nm: string;
  country_eng_nm: string;
  country_iso_alp2: string;
  country_nm: string;
  dang_map_download_url: string;
  flag_download_url: string;
  map_download_url: string;
  region_ty: string;
  remark: string;
  written_dt: string;
}


const DetailPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (countryCode) {
        try {
          const data = await fetchNationalData(countryCode);
          setCountryData(data.data[0] || null);
          console.log(countryData);
          
        } catch (error) {
          console.error("Error fetching country data:", error);
        }
      }
    };
    fetchData();
  }, [countryCode]);
  console.log(countryData);
  return (
    <main css={mainStyle}>
      <h1 css={h1Style}>국가별 정보</h1>
      <p css={pStyle}>국가의 상세 내용을 확인.</p>
      <div css={detailCon}>
        <section css={contriesName}>
          <div>
          {countryData ? (
            <img style={{width: "150px"}} src={countryData.flag_download_url} alt="국기 이미지" />
          ) : (
            <p>Loading flag...</p>
          )}
          </div>
          <div>
            <p css={css({fontSize: "24px"})}>{countryData?.country_nm} ({countryData?.country_eng_nm})</p>
            <p css={css({fontSize: "16px"})}>{countryData?.continent_nm}</p>
          </div>
          
        </section>
        <section css={detailInfo}>
          <div css={localImg}>
          {countryData ? (
            <img style={{width: '100%', height: "100%"}} src={countryData.dang_map_download_url} alt="국가 이미지" />
          ) : (
            <p>Loading flag...</p>
          )}
          </div>
          <div css={textContainer}>
            <div css={newsCon}>
              안전공지
            </div>
            <div css={embassyCon}>
              입국요건
            </div>
          </div>
        </section>
        <section css={embassy}>
          대사관정보
        </section>
      </div>
    </main>
  );
}

export default DetailPage;
