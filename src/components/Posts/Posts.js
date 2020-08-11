import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts, search } = props;

  // return (
  //   <div className="posts-container-wrapper">
  //     {
  //       posts.map(postData => {
  //         return <Post 
  //         id={postData.id}
  //         post={postData}
  //         likePost={likePost}
  //         />
  //       })
  //     }
  //     {/* Check the implementation of Post to see what props it requires! */}
  //   </div>
  // );

  if(posts.length > 1) {
    return (
      <div className="posts-container-wrapper">
        {
          posts.map(postData => {
            return <Post 
            id={postData.id}
            post={postData}
            likePost={likePost}
            />
          })
        }
        {/* Check the implementation of Post to see what props it requires! */}
      </div>
    );
  } else {
    return (
      <div className="posts-container-wrapper">
        <Post id={posts.id} post={posts} likePost={likePost}/>
        {/* Check the implementation of Post to see what props it requires! */}
      </div>
    );
  }
};

export default Posts;
