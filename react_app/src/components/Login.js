import { Link } from "react-router-dom";

const Login = () => {

  return (
    <>
      <div className="container text-center">
      <h1>Learner</h1>
      <div　className="my-5  bg-warning border border-dark">
      <h1>ログインページ</h1>
        <form>
          ID<input className="my-5" type="text"/><br/>
          パスワード<input className="my-3" type="password"/><br/>
          <input type="button" value="ログイン"　className="my-5"/>
        </form>
        <div>
          新規登録は<Link to={`/register/`}>こちら</Link>
        </div>
      </div>
      </div>

    </>
  );
};

export default Login;