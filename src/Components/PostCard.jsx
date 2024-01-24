import React from "react";
import postService from "../AppwiteBackend/PostConfig";
import { useNavigate } from "react-router-dom";
const PostCard = ({ $id, title, content, featuredImage }) => {
    const navigate = useNavigate();
    const handleCard=()=>{
       navigate(`/post/${$id}`)
    }
  return (
    <div class="w-[300px] rounded-md border">
      <img
        src={postService.getFilePreview(featuredImage)}
        alt={title}
        class="h-[200px] w-full rounded-md object-cover"
      />
      <div class="p-4">
        <h1 class="text-lg font-semibold">{title}</h1>
        <p class="mt-3 text-sm text-gray-600">
          {content}
        </p>
        <button
          type="button"
          onClick={handleCard}
          class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default PostCard;
