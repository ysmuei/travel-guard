/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query"; // React Query import
import { useParams } from "react-router-dom";
import Modal from "../common/Modal.tsx"; // Modal 컴포넌트 import
import {
  fetchNationalData,
  fetchEmbassyData,
  fetchPermissionData,
  fetchSafetyNoticeData,
} from "../../api/apis.ts"; // API 요청 함수 import
import { mainStyle, h1Style, pStyle } from "../../styles/TabMainStyle"; // 공통 스타일 import
import {
  detailCon,
  contriesName,
  detailInfo,
  localImg,
  textContainer,
  newsCon,
  embassy,
  embassyCon,
  newsList,
  newsHeader,
  embassyHeader,
  embassyListCon,
  embassyListStyle,
} from "../../styles/DetailStyle"; // DetailPage 스타일 import

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

interface PermissionData {
  국가: string;
  "일반여권소지자-입국가능기간": string;
  "일반여권소지자-입국가능여부": string;
  "입국시 소지여부": string;
}

interface EmbassyData {
  embassy_id: string;
  embassy_kor_nm: string;
  emblgbd_addr: string;
  tel_no: string;
  urgency_tel_no: string;
  country_iso_alp2: string;
}
interface SafetyNoticeData {
  sfty_notice_id: string;
  title: string;
  txt_origin_cn: string;
  wrt_dt: string;
}
const DetailPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedNotice, setSelectedNotice] = useState<SafetyNoticeData | null>(
    null
  );
  // 국가 정보 가져오기
  const {
    data: countryData,
    isLoading: isCountryLoading,
    error: countryError,
  } = useQuery({
    queryKey: ["nationalData", countryCode],
    queryFn: () => fetchNationalData(countryCode as string),
    enabled: !!countryCode, // countryCode가 있을 때만 쿼리 실행
    staleTime: 1000 * 60 * 60 * 6, // 6시간 동안 신선함 유지
  });

  // 대사관 정보 가져오기
  const {
    data: embassyData,
    isLoading: isEmbassyLoading,
    error: embassyError,
  } = useQuery({
    queryKey: ["embassyData", countryCode],
    queryFn: fetchEmbassyData,
    staleTime: 1000 * 60 * 60 * 6, // 6시간 동안 신선함 유지
    enabled: !!countryCode,
  });

  // 입국 요건 정보 가져오기
  const {
    data: permissionData,
    isLoading: isPermissionLoading,
    error: permissionError,
  } = useQuery({
    queryKey: ["permissionData", countryCode],
    queryFn: fetchPermissionData,
    staleTime: 1000 * 60 * 60 * 6, // 6시간 동안 신선함 유지
    enabled: !!countryCode,
  });

  // 안전 공지 정보 가져오기
  const {
    data: safetyNewsData,
    isLoading: isSafetyLoading,
    error: safetyError,
  } = useQuery({
    queryKey: ["safetyNewsData", countryCode],
    queryFn: ({ queryKey }) => {
      const ISO = queryKey[1]; // countryCode를 queryKey에서 가져옴
      return fetchSafetyNoticeData(ISO as string);
    },
    staleTime: 1000 * 60 * 60 * 6, // 6시간 동안 신선함 유지
    enabled: !!countryCode, // countryCode가 있을 때만 쿼리 실행
  });
  // 모달 열기 함수
  const openModal = (notice: SafetyNoticeData) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };
  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  // 로딩 상태
  if (
    isCountryLoading ||
    isEmbassyLoading ||
    isPermissionLoading ||
    isSafetyLoading
  ) {
    return <div>Loading...</div>;
  }

  // 오류 처리
  if (countryError || embassyError || permissionError || safetyError) {
    return <div>Error loading data.</div>;
  }

  // 대사관 데이터가 객체일 경우 배열 형태로 접근하도록 수정
  const embassyList = embassyData; // 대사관 데이터 배열

  return (
    <main css={mainStyle}>
      <h1 css={h1Style}>국가별 정보</h1>
      <p css={pStyle}>국가의 상세 내용을 확인.</p>
      <div css={detailCon}>
        <section css={contriesName}>
          <div>
            {countryData ? (
              <img
                style={{ width: "150px" }}
                src={countryData.data[0]?.flag_download_url}
                alt="국기 이미지"
              />
            ) : (
              <p>Loading flag...</p>
            )}
          </div>
          <div>
            <p css={css({ fontSize: "24px" })}>
              {countryData?.data[0]?.country_nm} (
              {countryData?.data[0]?.country_eng_nm})
            </p>
            <p css={css({ fontSize: "16px" })}>
              {countryData?.data[0]?.continent_nm}
            </p>
          </div>
        </section>
        <section css={detailInfo}>
          <div css={localImg}>
            {countryData ? (
              <img
                style={{ width: "100%", height: "100%" }}
                src={countryData.data[0]?.dang_map_download_url}
                alt="국가 이미지"
              />
            ) : (
              <p>Loading flag...</p>
            )}
          </div>
          <div css={textContainer}>
            <div css={newsCon}>
              <div css={newsHeader}>
                <p style={{ fontSize: "24px" }}>안전공지</p>
              </div>
              {safetyNewsData?.data?.map((news: any, index: number) => (
                <div onClick={() => openModal(news)} css={newsList} key={index}>
                  <p>{news.title}</p>
                  <p>{news.date}</p>
                </div>
              ))}
            </div>
            <div css={embassyCon}>
              <div css={embassyHeader}>
                <p style={{ fontSize: "24px" }}>입국요건</p>
              </div>
              {permissionData?.data
                ?.filter(
                  (permission: PermissionData) =>
                    permission.국가 === countryData?.data[0]?.country_nm
                )
                .map((permission: PermissionData, index: number) => (
                  <div key={index} css={embassyListStyle}>
                    <p>국가: {permission.국가}</p>
                    <p>
                      입국 가능 기간:{" "}
                      {permission["일반여권소지자-입국가능기간"]}
                    </p>
                    <p>
                      입국 가능 여부:{" "}
                      {permission["일반여권소지자-입국가능여부"]}
                    </p>
                    <p>입국 시 소지 여부: {permission["입국시 소지여부"]}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section css={embassy}>
          <div css={embassyHeader}>
            <p style={{ fontSize: "24px" }}>대사관 정보</p>
          </div>
          {embassyList
            .filter(
              (embassy: EmbassyData) => embassy.country_iso_alp2 === countryCode
            )
            .map((embassy: EmbassyData, index: number) => (
              <div key={index} css={embassyListCon}>
                <p>대사관 이름: {embassy.embassy_kor_nm}</p>
                <p>주소: {embassy.emblgbd_addr}</p>
                <p>대표 전화번호: {embassy.tel_no}</p>
                <p>긴급 전화번호: {embassy.urgency_tel_no}</p>
              </div>
            ))}
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedNotice && (
          <div>
            <h2>{selectedNotice.title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: selectedNotice.txt_origin_cn }}
            />
            <p>작성일: {selectedNotice.wrt_dt}</p>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default DetailPage;
