
import React,{useState} from 'react'
import { PostForm } from "../Components/PostForm/PostForm";
import { Container } from "../Components/Container/Container";
import postService from '../AppwiteBackend/PostConfig';
import { useNavigate, useParams } from 'react-router-dom';
function EditPost() {
    const [post,setPost]= useState([]);
    const navigate = useNavigate()
    const {slug}= useParams()
    React.useEffect(()=>{
        if(slug){
            postService.getPost(slug).then((res)=>{
                setPost(res)
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
  return post?(
    <div className='my-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ): null
}

export default EditPost