import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Video from "./components/Video";
import React, { useState } from 'react';
import Post from "./components/Post";

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home user={user} loggedInStatus={loggedInStatus} />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/post/`} element={<Login />} />
        <Route path={`/video/`} element={<Video />} />
        <Route path={`/post/`} element={<Post />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;