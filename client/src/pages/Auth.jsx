import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TaskService from "../API/TaskService";
import { UserContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import { useEffect } from "react";

const Auth = ({ isRegistering }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [validated, setValidated] = useState(false)
  const [show, setShow] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
useEffect(() => {
  setShow(false)
  setFormData({
    email: "",
    password: "",
  })
  setValidated(false)
}, [isRegistering]);

 async function handleAuth(){
    if (!isRegistering) { 
      try{
        const response = await TaskService.login(formData);
        localStorage.setItem("token", JSON.stringify(response));
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        navigate("/");
      }
      catch(e){
        setError(e)
        setShow(true)
        setValidated(false)
      }
    } else {
      try{
      await TaskService.register(formData);
        setFormData({
          email: "",
          password: "",
        });
        navigate("/login");
      }
      catch(e){
        setError(e)
        setShow(true)
      }
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    if(formData.email && formData.password){
      handleAuth()
    }
    else{
      setValidated(true)
    }
  }
  return (
    <>
      <Form
        className="w-25 m-auto mt-5 border border-primary p-5 rounded d-flex flex-column bg-light bg-gradient"
        noValidate
        validated={validated}
      >
        <h2 className="text-center">{isRegistering ? "Register" : "Login"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="example@mail.com"
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})}
            required
          />
        <Form.Control.Feedback type="invalid">Can't be empty!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          {isRegistering ? "Register" : "Login"}
        </Button>
      {show &&
        <Alert onClose={() => setShow(false)} dismissible variant="danger" className="mt-3 mb-0">
        {error.response.data.message}
        </Alert>}
        
      </Form>

    </>
  );
};

export default Auth;
