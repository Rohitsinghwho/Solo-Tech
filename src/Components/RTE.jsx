import { Editor } from "@tinymce/tinymce-react";
import {Controller } from "react-hook-form";
import React from 'react'
 const RTE = ({name ,label ,control,defaultValues=""}) => {
   return (
     <div>
        {label&&<label className="inline-block mb-1 pl-1">{label}</label>}
        <Controller
        name={name||'content'}
        control={control}
        render={({field:{onChange}})=>{
              <Editor
                initialValue={defaultValues}
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                onEditorChange={onChange}
              />
        }}
        />
     </div>
   )
 }
 
 export default RTE