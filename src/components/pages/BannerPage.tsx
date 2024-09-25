import React, { useEffect, useMemo, useState } from "react";
import Globe from "react-globe.gl";
import { scaleSequentialSqrt } from "d3-scale"; // d3-scale에서 가져옴
import { interpolateYlOrRd } from "d3-scale-chromatic"; // d3-scale-chromatic에서 가져옴
import { FeatureCollection, Feature } from "geojson"; // geojson 타입 사용

interface CountryProperties {
  ADMIN: string; // 국가 이름
  ISO_A2: string; // 국가 코드
  GDP_MD_EST: number; // GDP 데이터
  POP_EST: number; // 인구 데이터
}

interface CountryFeature extends Feature {
  properties: CountryProperties;
}

const BannerPage: React.FC = () => {
  const [countries, setCountries] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });
  const [hoverD, setHoverD] = useState<CountryFeature | null>(null);

  useEffect(() => {
    // 데이터 로드
    fetch("./datasets/countries.geojson")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  const colorScale = scaleSequentialSqrt(interpolateYlOrRd); // 수정된 부분

  // GDP per capita 계산 함수
  const getVal = (feat: CountryFeature) =>
    feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  const maxVal = useMemo(
    () =>
      Math.max(...countries.features.map((d) => getVal(d as CountryFeature))),
    [countries]
  );

  colorScale.domain([0, maxVal]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countries.features.filter(
          (d) => (d as CountryFeature).properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        polygonCapColor={(d) =>
          d === hoverD ? "steelblue" : colorScale(getVal(d as CountryFeature))
        }
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonStrokeColor={() => "#111"}
        polygonLabel={(d) => {
          const properties = (d as CountryFeature).properties; // 타입 캐스팅을 통해 properties 확인
          return `
      <b>${properties.ADMIN} (${properties.ISO_A2}):</b> <br />
      GDP: <i>${properties.GDP_MD_EST}</i> M$<br/>
      Population: <i>${properties.POP_EST}</i>
    `;
        }}
        onPolygonHover={(d) => setHoverD(d as CountryFeature | null)}
        polygonsTransitionDuration={300}
      />
    </div>
  );
};

export default BannerPage;
