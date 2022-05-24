import axios from "axios";
const API = process.env.REACT_APP_BACKEND_API;

const registerData = {
  firstName: "Bhooopendra",
  lastName: "Kumar",
  email: "bhoopendr.bhaskar@gmail.com",
  password: "123455",
  address: {
    street: "Near Jhanis",
    city: "Jhansi",
    country: "India",
    pincode: "284001",
    phoneNumber: "70070956398",
  },
};
const register = (firstName, lastName, email, password) => {
  console.log({ API });
  return axios.post(`${API}/auth/register`, {
    firstName,
    lastName,
    email,
    password,
  });
};

const AuthService = {
  register,
};

export default AuthService;
