import React from "react";
import { PostForm } from "../Components/PostForm/PostForm";
import { Container } from "../Components/Container/Container";
function AddPost() {
  return (
    <div className="my-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
