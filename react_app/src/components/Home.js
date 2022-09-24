import { Link } from "react-router-dom";

const Home = () => {
  const videolist = [
          <div className='mt-5 mx-auto mb-3' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
            <Link to={'/video/'} style={{textDecoration: 'none', color:'black'}}>
            <div className="videoTitle d-flex bd-highlight">
              <h4 className="p-2 flex-grow-1 bd-highlight">~title~</h4>
              <p className="p-2 bd-highlight">投稿者：○○</p>
              <p className="p-2 bd-highlight">投稿日時：●●年●月●日</p>
            </div>
            <div style={{maxWidth:'700px', maxHeight:'500px'}}>
              <video style={{width:'500',height:'300px'}}></video>
            </div>
            <div className="comment" style={{textAlign:'center'}}>
              <p>コメントコメント<br></br>コメントコメント</p>
            </div>
            </Link>
          </div>
  ];
  return (
    <>
      <body style={{backgroundColor:'#f0ffff'}}>
        <header className="d-flex justify-content-around pt-3" style={{borderBottom:'solid',}}>
          <div>
            <Link to={'/'} style={{textDecoration: 'none', color:'black'}}><h1>Learner</h1></Link>
          </div>
          <div>
            <form className="pt-3" action="#" method="post">
              <input style={{width:'500px'}}type="search" name="search" placeholder="キーワードを入力" />
              <input type="submit" name="submit" value="検索" />
            </form>
          </div>
          <div className="pt-3">
              <Link to={`/post/`} style={{textDecoration: 'none', color:'black'}} className="me-5">投稿</Link>
              <Link to={`/register/`} style={{textDecoration: 'none', color:'black'}}>新規登録</Link>・<Link to={`/login/`} style={{textDecoration: 'none', color:'black'}}>ログイン</Link>
        </div>
        </header>
        <main>
        { videolist }
        { videolist }
        { videolist }
        </main>
      </body>
    </>
  );
}

export default Home;