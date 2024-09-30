import axios from "axios";
const apyKey = import.meta.env.VITE_EMBASSY_API_KEY

const BASE_URL = `https://apis.data.go.kr/1262000/EmbassyService2/getEmbassyList2?serviceKey=${apyKey}&pageNo=1&numOfRows=200&returnType=JSON`; 

// 의료 관련 데이터를 가져오는 함수
export const fetchEmbassyData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetchEmbassyData:", error);
    throw error;
  }
};
