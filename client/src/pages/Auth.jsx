import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import TaskService from '../API/TaskService';
import { UserContext } from '../context/AuthContext';

const Auth = ({ isRegistering }) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            const response = await TaskService.login(formData)
            localStorage.setItem('token', JSON.stringify(response))
            localStorage.setItem('isLoggedIn', true);
            setIsLoggedIn(true)
            navigate('/')
        }
        else {
            TaskService.register(formData)
            setFormData({
                email: "",
                password:""
            })
            navigate('/login')
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
        <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </form>
        </div>
    );
};

export default Auth;
