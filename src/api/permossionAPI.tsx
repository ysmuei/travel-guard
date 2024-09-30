import axios from "axios";
const apyKey = import.meta.env.VITE_PERMISSON_API_KEY

// 의료 관련 데이터를 가져오는 함수
export const fetchPermissonlData = async () => {
  const BASE_URL = `http://api.odcloud.kr/api/15076574/v1/uddi:b0a4deac-3443-4e7b-bee1-a6163b1dbc17?page=1&perPage=200&returnType=json&serviceKey=${apyKey}`; 
  
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetchPermissonlData:", error);
    throw error;
  }
};
