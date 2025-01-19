import axiosInstance from "./api";

const reportService = {
  submitReport: async (data) => {
    try {
      const response = await axiosInstance.post("/reports", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default reportService;
