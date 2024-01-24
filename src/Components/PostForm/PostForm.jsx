import React from 'react'
import {useForm} from 'react-hook-form'
import postService from '../../AppwiteBackend/PostConfig'
import {Input} from '../Input'
import {RTE} from '../RTE'
import {Button} from '../Button'
import {Select} from '../Select'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const PostForm = ({post}) => {
   const {register,control,handleSubmit,setValue,watch,getValues}= useForm({
    defaultValues:{
      title:post.title||'',
      content:post.content||'',
      slug:post.$id||'',
      status:post.status||'Active',
    }
   })
   const navigate = useNavigate()
   const userData= useSelector(state=>state.auth.userData);
   const submit =async(data)=>{
    if(userData){
         const file= data.image[0]?await postService.uploadFile(data.image[0]):null
         if(file){
             await postService.deleteFile(post.featuredImage);
         }
         const dbPost=await postService.updatePost(post.$id, {...data, featuredImage:file?file.$id:''})
         if(dbPost){
            navigate(`post/${dbPost.$id}`)
         }
    }
    else{
          const file=await data.image[0]?await postService.uploadFile(data.image[0]):null
          if(file){
              data.featuredImage=file.$id
              const dbPost= await postService.createPost({...data,userId:userData.$id})
              if(dbPost){
                 navigate(`post/${dbPost.$id}`)
              }
          } 
    }
   }
   const slugTransform = React.useCallback((value)=>{
      if(value&& typeof value === 'string'){
        return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-")
      }
      else{
        return ""
      }
   })

   React.useEffect(()=>{
    try {
        const subscription = watch((value,{name})=>{
            if(name==="title"){
                setValue("slug",slugTransform(value.title),{shouldValidate:true})
            }
        })
        return ()=>{
            subscription.unsubscribe();
        }
    } catch (error) {
        console.log(`Unable to transform slug from title ${error.message}}`)
    }
   },[watch,navigate,slugTransform])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={postService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm