import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
    </>
  );
};

export default Home;