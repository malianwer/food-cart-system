import React, { useState } from "react";
import "./signup.css";
import { apiClient } from "../../API/api";

const SignupPage = () => {
  const [validation, setValidation] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = e.target;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };

    const hasError = checkValidation(user);
    if (hasError) {
      return;
    }

    const res = await apiClient.post("/register", user);

    if (res.data.errors) {
      setValidation({ ...validation, ...res.data.errors });
    }

    console.log(res.data);
  };

  const checkValidation = (user) => {
    let errors = {};

    if (!user.name) {
      errors.name = "name is required";
    }

    // email validation
    if (!user.email) {
      errors.email = "email is required";
    }
    //password validation
    if (!user.password) {
      errors.password = "password is required";
    }
    //matchPassword validation

    if (!user.confirmPassword) {
      errors.confirmPassword = "password confirmation is required";
    } else if (user.confirmPassword !== user.password) {
      errors.confirmPassword = "password does not match confirmation password";
    }

    setValidation(errors);
    return Object.keys(errors)?.length;
  };
  console.log(validation);

  return (
    <div>
      <h3 className="sign-up">SignUp Form</h3>
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="form-style">
          <div>
            <input className="input-field" placeholder="Name" name="name" />
            <p className="error-statement">{validation?.name}</p>
          </div>
          <div>
            <input
              className="input-field"
              placeholder="Email"
              name="email"
              type="email"
            />
            <p className="error-statement">{validation?.email}</p>
          </div>
        </div>
        <div className="form-style">
          <div>
            <input
              className="input-field"
              placeholder="Password"
              name="password"
              type="password"
            />
            <p className="error-statement">{validation?.password}</p>
          </div>
          <div>
            <input
              className="input-field"
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <p className="error-statement">{validation?.confirmPassword}</p>
          </div>
        </div>
        <input type="submit" className="button-style" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignupPage;
