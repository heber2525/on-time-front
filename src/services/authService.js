import axios from "axios";
const apiUrl = import.meta.env.VITE_BACK;
const auth = "/auth";
const apiAuth = `${apiUrl}${auth}`;
const authServices = {
  login: async (data) => {
    try {
      const response = await axios.post(`${apiAuth}/login`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  register: async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/usuarios`, data);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default authServices;
