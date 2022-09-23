import { Link } from "react-router-dom";

const Video = () => {
  return (
    <>
      <body style={{backgroundColor:'#f0ffff'}}>
        <header className="d-flex justify-content-around pt-3" style={{borderBottom:'solid',}}>
          <div>
            <Link to={'/'}style={{textDecoration: 'none', color:'black'}}><h1>Learner</h1></Link>
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
          <div className='mt-5 mx-auto' style={{maxWidth:'75%', maxHeight:'50x'}}>
            <div className="videoTitle d-flex bd-highlight">
              <h4 className="p-2 flex-grow-1 bd-highlight">~title~</h4>
              <p className="p-2 bd-highlight">投稿者：○○</p>
              <p className="p-2 bd-highlight">投稿日時：●●年●月●日</p>
            </div>
            <div className="video" style={{maxWidth:'65%', maxHeight:'45%'}}>
              <video style={{width:'700',height:'500px'}}></video>
            </div>
            <div className="comment" style={{textAlign:'center'}}>
              <p>コメントコメント<br></br>コメントコメント</p>
            </div>
            <div style={{textAlign:'center'}}>
              <div className="Advice mt-5" style={{textAlign:'center'}}>
                <h3>アドバイス投稿</h3>
                <textarea style={{width:'500px', height:'100px'}} placeholder="アドバイスを入力してください" /><br></br>
                <input type="submit" name="submit" value="投稿" style={{width:'50px', height:'30px'}}/>
              </div>
              <div className="mt-5">
                <h4>アドバイス一覧</h4>
                <p>・アドバイス、アドバイス</p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default Video;