import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
      <h1>ログインページ</h1>
      <div　className="my-5">
        <form>
          ID<input/>
          PASSWORD<input/>
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