import React, { useEffect, useState } from "react";
import  PostCard  from "../Components/PostCard";
import  Container  from "../Components/Container/Container";
import postService from "../AppwiteBackend/PostConfig";

const AllPosts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    postService.getPosts().then((res) => {
      setPost(res.documents);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
