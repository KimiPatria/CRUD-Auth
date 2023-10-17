import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
   const getUser = ()=>{
    fetch("http://localhost:5000/auth/login/success",{
      method: "GET",
      credentials: "include",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    }).then(response=>{
      if(response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    })
    .then(resObject=>{
      setUser(resObject.user)
    })
    .catch(err=>{
      console.log(err)
    });
   };
    getUser();

  },[])

  console.log(user);

  return (
    <main>
      <BrowserRouter>
        <div>
          <Navbar user={user}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
            path="/login" 
            element={user ? <Navigate to="/"/> : <Login/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
