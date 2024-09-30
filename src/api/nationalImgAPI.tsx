import axios from "axios";
const apyKey = import.meta.env.VITE_NATIONALIMG_API_KEY

// 의료 관련 데이터를 가져오는 함수
export const fetchNationalData = async (ISO: string) => {
  const BASE_URL = `https://apis.data.go.kr/1262000/TravelAlarmService0404/getTravelAlarm0404List?serviceKey=${apyKey}&page=1&returnType=JSON&cond[country_iso_alp2::EQ]=${ISO}`; 
  
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetchNationalData:", error);
    throw error;
  }
};
