import apiClient from "./apiClient";

export const searchFlights = async (params: Record<string, any>) => {
  const response = await apiClient.get("/flights/searchFlights", { params });
  return response.data;
};

export const searchHotels = async (params: Record<string, any>) => {
  const response = await apiClient.get("/hotels/searchHotels", { params });
  return response.data;
};

export const searchActivities = async (params: Record<string, any>) => {
  const response = await apiClient.get("/attraction/searchAttractions", { params });
  return response.data;
};

export const getFlightDetails = async (params: Record<string, any>) => {
  const response = await apiClient.get("/flights/getFlightDetails", { params });
  return response.data;
};

export const getHotelDetails = async (params: Record<string, any>) => {
  const response = await apiClient.get("/hotels/searchHotels", { params });
  return response.data;
};

export const getActivityDetails = async (params: Record<string, any>) => {
  const response = await apiClient.get("/attraction/getAttractionDetails", { params });
  return response.data;
};
