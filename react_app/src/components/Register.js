import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container text-center">
      <h1>Learner</h1>
      <div className="my-5  bg-light border border-dark">
      <h1>新規登録ページ</h1>
        <form>
          ID<input className="my-5" type="text"/><br/>
          パスワード<input className="my-3" type="password"/><br/>
          <Link to="/coaching-web-app/">          
          <input type="button" value="新規登録"　className="my-5"/>
          </Link>
        </form>
        <div>
          ログイン<Link to={`/coaching-web-app/login/`}>こちら</Link>
        </div>
      </div>
      </div>

    </>
  );
}

export default Register;