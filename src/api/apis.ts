// src/api/apis.ts
import axios from "axios";

// 환경 변수에서 API 키 가져오기
const EMBASSY_API_KEY = import.meta.env.VITE_EMBASSY_API_KEY;
const MEDICAL_API_KEY = import.meta.env.VITE_MEDICAL_API_KEY;
const NATIONALIMG_API_KEY = import.meta.env.VITE_NATIONALIMG_API_KEY;
const PERMISSON_API_KEY = import.meta.env.VITE_PERMISSON_API_KEY;
const SAFENEWS_API_KEY = import.meta.env.VITE_SAFENEWS_API_KEY;

// 대사관 데이터를 가져오는 함수
export const fetchEmbassyData = async () => {
  const BASE_URL = `https://apis.data.go.kr/1262000/EmbassyService2/getEmbassyList2?serviceKey=${EMBASSY_API_KEY}&pageNo=1&numOfRows=200&returnType=JSON`;

  try {
    const response = await axios.get(BASE_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetchEmbassyData:", error);
    throw error;
  }
};

// 의료 데이터를 가져오는 함수
export const fetchMedicalData = async () => {
  const BASE_URL = `https://apis.data.go.kr/1262000/MedicalEnvironmentService/getMedicalEnvironmentList?serviceKey=${MEDICAL_API_KEY}&numOfRows=193`;

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
    
    
  } catch (error) {
    console.error("Error fetchMedicalData:", error);
    throw error;
  }
};

// 국가별 데이터를 가져오는 함수
export const fetchNationalData = async (ISO: string) => {
  const BASE_URL = `https://apis.data.go.kr/1262000/TravelAlarmService0404/getTravelAlarm0404List?serviceKey=${NATIONALIMG_API_KEY}&page=1&returnType=JSON&cond[country_iso_alp2::EQ]=${ISO}`;

  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetchNationalData:", error);
    throw error;
  }
};

// 입국 허가 데이터를 가져오는 함수
export const fetchPermissionData = async () => {
  const BASE_URL = `https://api.odcloud.kr/api/15076574/v1/uddi:b0a4deac-3443-4e7b-bee1-a6163b1dbc17?page=1&perPage=200&returnType=json&serviceKey=${PERMISSON_API_KEY}`;

  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetchPermissionData:", error);
    throw error;
  }
};

// 안전 공지 데이터를 가져오는 함수
export const fetchSafetyNoticeData = async (ISO: string) => {
  const BASE_URL = `https://apis.data.go.kr/1262000/CountrySafetyService6/getCountrySafetyList6?serviceKey=${SAFENEWS_API_KEY}&numOfRows=3&cond[country_iso_alp2::EQ]=${ISO}&pageNo=1`;
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetchSafetyNoticeData:", error);
    throw error;
  }
};
