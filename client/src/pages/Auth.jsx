import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext';

const Auth = ({ isRegistering }) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    //if(isLoggedIn){
    //    return <Navigate to="/" replace/>
    //}
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isRegistering) {
            const response = axios.post("/api/auth/login", formData)
                .then(response => {
                    localStorage.setItem('token', JSON.stringify(response.data.token))
                    setIsLoggedIn(prev => !prev)
                    localStorage.setItem('isLoggedIn', true);
                    navigate('/')
                })
        }
        else {
            const response = axios.post("api/auth/register", formData)
                .then(response => {console.log(response)})
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
