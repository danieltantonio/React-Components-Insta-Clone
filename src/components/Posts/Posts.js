import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {
        posts.map(postData => {
          return <Post id={postData.id}
          post={postData}
          username={postData.username}
          thumbnailUrl={postData.thumbnailUrl}
          imageUrl={postData.imageUrl}
          likes={postData.likes}
          likePost={likePost}
          comments={postData.comments}
          />
        })
      }
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
