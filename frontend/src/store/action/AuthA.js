import axios from "axios";
// import {reg_url, login_url} from '../../config.js'

const AuthA = dispatch => {
  return {
    signup: data => {
      axios
        .post(process.env.REACT_APP_REG_URL, data)
        .then(res => {
          axios
            .post(process.env.REACT_APP_LOGIN_URL, data)
            .then(res => {
              localStorage.setItem("user", data.email);
              localStorage.setItem("token", res.data.id);
              localStorage.setItem("userId", res.data.userId);
              dispatch({ type: "LOGIN" });
            })
            .catch(err => {
              console.log(err);
              dispatch({ type: "LOGIN_ERR" });
            });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "SIGNUP_ERR" });
        });
    },
    login: data => {
      axios
        .post(process.env.REACT_APP_LOGIN_URL, data)
        .then(res => {
          localStorage.setItem("user", data.email);
          localStorage.setItem("token", res.data.id);
          localStorage.setItem("userId", res.data.userId);
          dispatch({ type: "LOGIN" });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "LOGIN_ERR" });
        });
    },
    logout: () => {
      localStorage.clear();
      dispatch({ type: "LOGOUT" });
    }
  };
};

export default AuthA;
