import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TaskService from "../API/TaskService";
import { UserContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import { useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';

const Auth = ({ isRegistering }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [validated, setValidated] = useState(false)
  const [show, setShow] = useState(false);
  const [error, setError] = useState("")
  const [isVisible, setVisible] = useState(false)
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
  setVisible(false)
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

      <Form
        className="w-25 m-auto mt-5 border border-primary p-5 rounded d-flex flex-column bg-light bg-gradient"
        noValidate
        validated={validated}
      >
        <h2 className="text-center m-0 p-0">{isRegistering ? "Register" : "Login"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="example@mail.com"
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            required
          />
        <Form.Control.Feedback type="invalid">Invalid e-mail form</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Password"
          value={formData.password}
          type={isVisible ? "text" : "Password"}
          onChange={e => setFormData({...formData, password: e.target.value})}
          required
        />
        <InputGroup.Text id="basic-addon1" style={{cursor:"pointer"}} onClick={() => setVisible(prev => !prev)}><span className="material-symbols-outlined">visibility{isVisible ? "" : "_off"}</span></InputGroup.Text>
        <Form.Control.Feedback type="invalid">Can't be empty!</Form.Control.Feedback>
      </InputGroup>

        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          {isRegistering ? "Register" : "Login"}
        </Button>
      {show &&
        <Alert onClose={() => setShow(false)} dismissible variant="danger" className="mt-3 mb-0">
        {error.response.data.message}
        </Alert>}
        
      </Form>

  );
};

export default Auth;
