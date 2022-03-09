import React, { useContext, useState } from "react";
import { apiClient } from "../../API/api";
import { UserContext } from "../../App";
import "../Login/login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [validation, setValidation] = useState();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      email: email.value,
      password: password.value,
    };

    const hasError = checkValidation(user);
    if (hasError) {
      return;
    }

    const res = await apiClient.post("/login", user);

    console.log(res.data);
    await localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    navigate("/home/user");
  };

  const checkValidation = (user) => {
    let errors = {};

    // email validation
    if (!user.email) {
      errors.email = "email is required";
    }
    //password validation
    if (!user.password) {
      errors.password = "password is required";
    }

    setValidation(errors);
    return Object.keys(errors)?.length;
  };

  return (
    <div>
      <h3 className="login">Login Form</h3>
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="form-style">
          <div>
            <input
              className="input-field"
              placeholder="Email"
              name="email"
              type="email"
            />
            <p className="error-statement">{validation?.email}</p>
          </div>
          <div>
            <input
              className="input-field"
              placeholder="Password"
              name="password"
              type="password"
            />
            <p className="error-statement">{validation?.password}</p>
          </div>
        </div>
        <input type="submit" className="button-style" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
