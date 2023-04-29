import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../../context/AuthContext'
import './header.css'
const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false)
    }
    
    return (
        <header>
            <div className='header__wrapper'>
                <ul>
                    <div className='header__content'>
                        <li><Link to="/">Home</Link></li>
                            <div className='header__auth'>
                        {!isLoggedIn
                            ?
                            <li><Link to="/login">Login</Link></li>
                            :
                            <li><a onClick={logout}>Logout</a></li>
                        }
                        {!isLoggedIn && <li><Link to="/register">Registration</Link></li>}
                        </div>
                    </div>
                </ul>

            </div>
        </header>
    );
}

export default Header;
