import { Link } from "react-router-dom";

const Home = (props) => {





  return (
    <>
      <header className="d-flex justify-content-around mt-3" style={{borderBottom:'solid',}}>
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
          <Link className="mx-5" style={{textDecoration: 'none', color:'black', border:"1px"}} to={`/post/`}>投稿する</Link>
          <Link to={`/register/`} style={{textDecoration: 'none', color:'black'}}>新規登録</Link>・<Link to={`/login/`} style={{textDecoration: 'none', color:'black'}}>ログイン</Link>
      </div>
      </header>
      <main>
        <div className='mt-5 mx-auto' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
          <div className="videoTitle d-flex bd-highlight">
            <h4 className="p-2 flex-grow-1 bd-highlight">~title~</h4>
            <p className="p-2 bd-highlight">投稿者：○○</p>
            <p className="p-2 bd-highlight">投稿日時：●●年●月●日</p>
          </div>
          <div className="video" style={{maxWidth:'700px', maxHeight:'500px'}}>
            <video style={{width:'500',height:'300px'}}></video>
          </div>
          <div className="comment" style={{textAlign:'center'}}>
            <p>コメントコメント<br></br>コメントコメント</p>
          </div>
        </div>
        <div className='mt-5 mx-auto' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
          <div className="videoTitle d-flex bd-highlight">
            <h4 className="p-2 flex-grow-1 bd-highlight">~title~</h4>
            <p className="p-2 bd-highlight">投稿者：○○</p>
            <p className="p-2 bd-highlight">投稿日時：●●年●月●日</p>
          </div>
          <div className="video" style={{maxWidth:'700px', maxHeight:'500px'}}>
            <video style={{width:'500',height:'300px'}}></video>
          </div>
          <div className="comment" style={{textAlign:'center'}}>
            <p>コメントコメント<br></br>コメントコメント</p>
          </div>
        </div>
        <div className='mt-5 mx-auto' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
          <div className="videoTitle d-flex bd-highlight">
            <h4 className="p-2 flex-grow-1 bd-highlight">~title~</h4>
            <p className="p-2 bd-highlight">投稿者：○○</p>
            <p className="p-2 bd-highlight">投稿日時：●●年●月●日</p>
          </div>
          <div className="video" style={{maxWidth:'700px', maxHeight:'500px'}}>
            <video style={{width:'500',height:'300px'}}></video>
          </div>
          <div>
            <form className="pt-3" action="#" method="post">
              <input style={{width:'500px'}}type="search" name="search" placeholder="キーワードを入力" />
              <input type="submit" name="submit" value="検索" />
            </form>
          </div>
          <div className="pt-3">
            <Link to={`/register/`} style={{textDecoration: 'none', color:'black'}}>新規登録</Link>・<Link to={`/login/`} style={{textDecoration: 'none', color:'black'}}>ログイン</Link>
        </div>
        </header>
        <main>
          <Link to={'/video/'} style={{textDecoration: 'none', color:'black'}}>
            <div className='mt-5 mx-auto' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
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
            </div>
          </Link>
          <Link to={'/video/'} style={{textDecoration: 'none', color:'black'}}>
            <div className='mt-5 mx-auto' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
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
            </div>
          </Link>
          <Link to={'/video/'} style={{textDecoration: 'none', color:'black'}}>
            <div className='mt-5 mx-auto' style={{maxWidth:'900px', maxHeight:'600x',border:'solid'}}>
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
            </div>
          </Link>
        </main>
      </body>
    </>
  );
};

export default Home;