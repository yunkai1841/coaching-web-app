import { Link } from "react-router-dom";
// import React, { useState } from 'react'
import React from "react";

const Login = (props) => {


  return (
    <>
      <div className="container text-center">
      <h1>Learner</h1>
      <div className="my-5  bg-warning border border-dark">
      <h1>ログインページ</h1>
        <form>
          ID<input className="my-5" type="text"/><br/>
          パスワード<input className="my-3" type="password"/><br/>
          <Link to="/coaching-web-app/">
          <input type="button" value="ログイン" className="my-5"/>
          </Link>
        </form>
        <div>
          新規登録は<Link to={`/coaching-web-app/register/`}>こちら</Link>
        </div>
      </div>
      </div>

    </>
  );
};

export default Login;