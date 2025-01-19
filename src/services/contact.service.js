import axiosInstance from "./api";

const contactService = {
  sendContactForm: async (data) => {
    try {
      const response = await axiosInstance.post("/contacts", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default contactService;
