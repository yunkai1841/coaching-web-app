import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Post from "./components/Post";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/post/`} element={<Post />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;