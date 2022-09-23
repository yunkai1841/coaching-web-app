import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="d-flex justify-content-around mt-3" style={{borderBottom:'1px,solid'}}>
        <div>
          <a href="#" style={{textDecoration: 'none', color:'black'}}><h1>Learner</h1></a>
        </div>
        <div>
          <form className="pt-3" action="#" method="post">
            <input style={{width:'500px'}}type="search" name="search" placeholder="キーワードを入力" />
            <input type="submit" name="submit" value="検索" />
          </form>
        </div>
        <div className="pt-3">
          <Link to={`/register/`}>新規登録</Link>・<Link to={`/register/`}>ログイン</Link>
      </div>
      </header>
      <main>
        <div class='mt-6'style={{maxWidth:'700px', maxHeight:'400px', textAlign:'center', color:'black'}}>
          <div className="videoTitle">
            <h4>~title~</h4>
            <p>投稿日時：●●年●月●日</p>
          </div>
          <div className="video">

          </div>
          <div className="comment">
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;