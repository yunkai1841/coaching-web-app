import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Video from "./components/Video";
import React, { useState } from 'react';

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState("me")
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home user={user} loggedInStatus={loggedInStatus} />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/post/`} element={<Login />} />
        <Route path={`/video/`} element={<Video />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;