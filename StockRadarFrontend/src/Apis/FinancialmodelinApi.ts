import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "../company";

export interface SearchResponse {
  data: CompanySearch[];
}

const api = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3",
  headers: {
    "Content-Type": "application/json",
  },
});

export const searchCompany = async (query: string | undefined) => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching company data:", error);
  }
};

export const getCompanyProfile = async (ticker: string) => {
  try {
    const response = await api.get<CompanyProfile[]>(
      `/profile/${ticker}?apikey=${import.meta.env.VITE_API_KEY}`
    );
    console.log("API response:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching company data:", error);
  }
};


export const getKeyMetrics = async (ticker: string) => {
  try {
    const response = await api.get<CompanyKeyMetrics[]>(
      `/key-metrics-ttm/${ticker}?apikey=${import.meta.env.VITE_API_KEY}`
    );
    console.log("API response:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching company data:", error);
  }
};


// https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAPL?apikey=H4xfqeuzzf51bHiHVKJIErxy1I3MEXLI
