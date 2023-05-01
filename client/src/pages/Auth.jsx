import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TaskService from "../API/TaskService";
import { UserContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Auth = ({ isRegistering }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      const response = await TaskService.login(formData);
      localStorage.setItem("token", JSON.stringify(response));
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      TaskService.register(formData);
      setFormData({
        email: "",
        password: "",
      });
      navigate("/login");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="w-25 m-auto mt-5 border border-primary p-5 rounded d-flex flex-column bg-light bg-gradient"
      >
        <h2 className="text-center">{isRegistering ? "Register" : "Login"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isRegistering ? "Register" : "Login"}
        </Button>
      </Form>
    </>
  );
};

export default Auth;
