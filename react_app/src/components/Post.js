import React from "react";
import { Link } from "react-router-dom";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function Post() {
    // （2）
    const onDrop = useCallback((acceptedFiles) => {
      console.log(acceptedFiles); // （4）
    }, []); // 空配列を指定したのでonDropのインスタンスはコンポーネントの破棄まで更新されない
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop }); // （1）

    let dropbox = {
      height:'150px',
      width:"40%",
      marginTop: "40px",
      marginLeft: "auto",
      marginRight: "auto"
    };

    let commentbox = {
      width:'70%',
      height:'400px'
    };
  
    return (
      <div  className="text-center">
        <div>
            <h1>投稿しよう！</h1>
        </div>
        <div className="border" style={dropbox}>
        <div {...getRootProps()} >{/* （3） */}
          <input {...getInputProps()} />{/* （3） */}
          <p>
            ファイルをここにドラッグアンドドロップするか、
            クリックしてファイルを選択してください
          </p>
        </div>
        </div>
        <textarea type="text" size="500" className="mx-5 my-5" style={commentbox} placeholder="改善したいポイント" maxlength="1000"/>
      </div>
    );
}
export default Post;