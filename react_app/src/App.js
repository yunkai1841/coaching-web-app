import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Video from "./components/Video";
import Post from "./components/Post";
import React from 'react';
import './App.css'
// import { useState } from "react";

const App = () => {
  // const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  // const [user, setUser] = useState("me")
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path={`/`} element={<Home user={user} loggedInStatus={loggedInStatus} />} /> */}
        <Route index path={`/coaching-web-app/`} element={<Home />} />
        <Route path={`/coaching-web-app/register/`} element={<Register />} />
        <Route path={`/coaching-web-app/login/`} element={<Login />} />
        <Route path={`/coaching-web-app/video/`} element={<Video />} />
        <Route path={`/coaching-web-app/post/`} element={<Post />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;