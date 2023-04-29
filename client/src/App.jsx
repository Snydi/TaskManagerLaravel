
import './App.css'
import { BrowserRouter, Navigate } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Header from './components/UI/Header/Header'
import { UserContext } from './context/AuthContext'
import { useEffect, useState } from 'react'




// TODO Sidebar on exit animation, search bar and sorting menu.

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === "true") {
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