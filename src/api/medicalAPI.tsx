import axios from "axios";
const apyKey = import.meta.env.VITE_MEDICAL_API_KEY

const BASE_URL = `https://apis.data.go.kr/1262000/MedicalEnvironmentService/getMedicalEnvironmentList?serviceKey=${apyKey}&numOfRows=193`; 

// 의료 관련 데이터를 가져오는 함수
export const fetchMedicalData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching medical data:", error);
    throw error;
  }
};
