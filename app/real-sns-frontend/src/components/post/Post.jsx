import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Shine code</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">
              {post.like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postLikeCounter">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
