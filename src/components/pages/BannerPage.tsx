import React, { useEffect, useMemo, useState } from "react";
import Globe from "react-globe.gl";
import { FeatureCollection, Feature } from "geojson"; // geojson 타입 사용
import { useQuery } from "@tanstack/react-query"; // React Query import
import { fetchMedicalData, fetchEmbassyData } from "../../api/apis"; // apis.ts 파일에서 API 가져오기
import WarningLevel from "../common/WarningLevel";

interface CountryProperties {
  ADMIN: string; // 국가 이름
  ISO_A2: string; // 국가 코드
}

interface CountryFeature extends Feature {
  properties: CountryProperties;
}

interface MedicalData {
  country_nm: string;
  country_iso_alp2: string;
  current_travel_alarm: string | null;
}

interface EmbassyData {
  country_iso_alp2?: string;
  embassy_kor_nm: string;
  emblgbd_addr: string;
  tel_no: string;
  urgency_tel_no: string;
}

const BannerPage: React.FC = () => {
  const [countries, setCountries] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });
  const [hoverD, setHoverD] = useState<CountryFeature | null>(null);

  // GeoJSON 데이터를 가져오기 위한 useEffect
  useEffect(() => {
    fetch("./datasets/countries.geojson")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  // React Query를 사용해 Medical API 데이터 가져오기
  const {
    data: medicalData,
    isLoading: isLoadingMedicalData,
    error: errorMedicalData,
  } = useQuery({
    queryKey: ["medicalData"],
    queryFn: fetchMedicalData,
    staleTime: 1000 * 60 * 60 * 6, 
  });

  const {
    data: embassyData,
    isLoading: isLoadingEmbassyData,
    error: errorEmbassyData,
  } = useQuery({
    queryKey: ["embassyData"],
    queryFn: fetchEmbassyData,
    staleTime: 1000 * 60 * 60 * 6, 
  });

  // 경보 단계에 따라 색상을 설정하는 함수
  const getAlertLevelColor = (alertLevel: string | null) => {
    if (alertLevel === null) {
      return "rgba(255, 255, 255, 0.9)"; 
    }
    switch (alertLevel) {
      case "0단계":
        return "rgba(255, 255, 255, 0.9)"; 
      case "2단계":
        return "rgba(0, 255, 163, 0.9)"; 
      case "3단계":
        return "rgba(255, 247, 56, 0.9)"; 
      case "4단계":
        return "rgba(255, 102, 54, 0.9)"; 
      case "5단계":
        return "rgba(255, 7, 215, 0.9)"; 
      default:
        return "rgba(255, 255, 255, 0.9)"; 
    }
  };
  

  // 각 국가의 경보 단계에 따른 색상 매핑
  const countryColorMapping = useMemo(() => {
    const mapping: { [key: string]: string } = {};
    medicalData?.data.forEach((data: MedicalData) => {
      const alertLevel = data.current_travel_alarm
        ? data.current_travel_alarm.split(":")[0]
        : null;
      if (data.country_iso_alp2) {
        mapping[data.country_iso_alp2.toUpperCase()] =
          getAlertLevelColor(alertLevel);
      }
    });
    return mapping;
  }, [medicalData]);

  // 로딩 상태와 에러 처리
  if (isLoadingMedicalData || isLoadingEmbassyData) {
    return <p>Loading...</p>;
  }

  if (errorMedicalData || errorEmbassyData) {
    return <p>Error loading data</p>;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countries.features.filter(
          (d) => (d as CountryFeature).properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        polygonCapColor={(d) => {
          const countryCode = (d as CountryFeature).properties.ISO_A2.toUpperCase();
          return d === hoverD
            ? "steelblue"
            : countryColorMapping[countryCode] || "white";
        }}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonStrokeColor={() => "#111"}
        polygonLabel={(d) => {
          const properties = (d as CountryFeature).properties;
          const embassyInfo = embassyData?.find(
            (embassy: EmbassyData) =>
              embassy.country_iso_alp2?.toUpperCase() === properties.ISO_A2
          );

          return `
            <div style="background-color: rgba(0, 0, 0, 0.7); padding: 10px; border-radius: 8px;">
              <b>${properties.ADMIN} (${properties.ISO_A2})</b><br/>
              ${
                embassyInfo
                  ? `
                    ${embassyInfo.embassy_kor_nm}<br/>
                    <b>전화:</b> ${embassyInfo.tel_no}<br/>
                    <b>긴급 전화:</b> ${embassyInfo.urgency_tel_no}<br/>
                  `
                  : "정보가 없습니다."
              }
            </div>
          `;
        }}
        onPolygonHover={(d) => setHoverD(d as CountryFeature | null)}
        onPolygonClick={(d) => {
          const properties = (d as CountryFeature).properties;
          const countryCode = properties.ISO_A2.toUpperCase();
          // 상세 페이지로 이동
          window.location.href = `/details/${countryCode}`;
        }}
        polygonsTransitionDuration={300}
      />

      <WarningLevel />
    </div>
  );
};

export default BannerPage;
