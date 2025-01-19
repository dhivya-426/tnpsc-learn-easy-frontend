import axiosInstance from "./api";

const questionService = {
  getQuestionsByTopic: async (title, topic) => {
    try {
      const response = await axiosInstance.get(
        `/questions/topic/${title}/${topic}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getRandomQuestions: async () => {
    try {
      const response = await axiosInstance.get(`/questions/random`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default questionService;
