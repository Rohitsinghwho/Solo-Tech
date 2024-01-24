import {Databases,Account,Storage,Query,ID, Client} from 'appwrite'
import conf from "../environmentConfiguration/conf";

export class PostService{
    client= new Client();
    databases
    bucket

    constructor(){
        this.client
             .setEndpoint(conf.AppwriteUrl)
             .setProject(conf.AppwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,content,slug,featuredImage,status,userId}){
        try {
             return await this.databases.createDocument(
                conf.AppwriteDatabaseId,
                conf.AppwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
             )
        } catch (error) {
            console.log(`Error in Creating Post::: ${error.message}`)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
            try {
                return await this.databases.updateDocument(
                    conf.AppwriteDatabaseId,
                    conf.AppwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                    }
                )
            } catch (error) {
                console.log(`Error in Updating Post::: ${error.message}`)
                
            }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.AppwriteDatabaseId,
                conf.AppwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log(`Error in Deleting Post::: ${error.message}`)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.AppwriteDatabaseId,
                conf.AppwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`Error in Getting Post::: ${error.message}`)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.AppwriteDatabaseId,
                conf.AppwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(`Error in Getting All Posts::: ${error.message}`)
            return false;
        }
    }
     //file handling queries

     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.AppwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`Error in Uploading ImageFile::: ${error.message}`)
            return false;
            
        }
     }
     async deleteFile(fildId){
        try {
            await this.bucket.deleteFile(
                conf.AppwriteBucketId,
                fildId
            )
            return true;
        } catch (error) {
            console.log(`Error in Deleting ImageFile::: ${error.message}`)
            return false;
        }
     }

      getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.AppwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(`Error in Getting FilePreview::: ${error.message}`)
            return false;
        }
     }
}

const postService= new PostService();

export default postService;