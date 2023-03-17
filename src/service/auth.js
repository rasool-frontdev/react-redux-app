import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const response = await axios.post("/users", {user});
    return response;
  },
  async userLogin() {
    const response = await axios.post("/users/login");
    return response;
  },
  async getUser() {
    const response = await axios.post("/user");
    return response;
  },
};

export default AuthService;
