import API from "./ApiService";

export async function GetAllQuotes() {
  const response = await API.get("/quotes");
  return response.data;
}

export async function GetTodayQuotes() {
  const response = await API.get("/quotes/random");
  return response.data;
}
