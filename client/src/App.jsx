
import './App.css'
import { BrowserRouter, Navigate } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Header from './components/UI/Header/Header'
import { UserContext } from './AuthContext'
import { useEffect, useState } from 'react'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedInInLocalStorage = localStorage.getItem('isLoggedIn');
    if (isLoggedInInLocalStorage === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (

      <BrowserRouter>
      <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Header/>
        <AppRouter/>
      </UserContext.Provider>
      </BrowserRouter>


  )
}

export default App