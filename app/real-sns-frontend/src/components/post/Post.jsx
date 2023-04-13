import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img src="./assets/person/1.jpeg" alt="" className="postProfileImg" />
          <span className="postUsername">Shine code</span>
          <spna className="postDate">5分前</spna>
        </div>
        <div className="postRight">
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">SNSを自作中</span>
          <img src="./assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/post/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">5人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postLikeCounter">4:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
