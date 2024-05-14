import conf from "../conf/config";

import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service{

client =new Client()
databases;
bucket;

constructor()
{
    this.client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); 

    this.databases=new Databases(this.client)
    this.bucket=new Storage(this.client)
}

// A slug, also known as a URL slug, is descriptive text after the website name at the end of a URL that identifies a web page on the domain. It typically contains keywords and phrases separated by hyphens, helping users and search engines understand the subject or content of a page.


// here slug will be the name of the document 

async createPost({title,slug,content,featuredImage,status,userId}){
    try {

        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
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

        throw error
        
    }

}

async updatePost(slug,{title,content,featuredImage,status})
{
    try {

        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
                
            }
        )
        
    } catch (error) {
        throw error;
    }

}


async deletePost(slug)
{
    try {

        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug  
        )
        
    } catch (error) {
        throw error;

        return false;
    }

}



async getPost(slug)
{
    try {

       return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId, // collectionId
            slug, // documentId
          
        );
        
    } catch (error) {
        throw error;

        return false;
    }

}


async getPosts(queries=[Query.equal("status","equal")])
{
    try {

       return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId, // collectionId
            queries
        
          
        );
        
    } catch (error) {
        throw error;

        return false;
    }

}


// file Upload Service

async uploadFile(file)
{
    try {

        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
        
    } catch (error) {
        throw error;

        return false;
    }
}


async deleteFile(fileId)
{
    try {

        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId

        )

        return true;
 
        
    } catch (error) {
        throw error;

        return false;
    }
}

 getFilePreview(fileId)
{

    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )

}






}



const service=new Service()

export default service