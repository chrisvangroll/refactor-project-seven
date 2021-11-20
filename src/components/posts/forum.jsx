import React, {useContext} from 'react';
import { DataContext } from '../../dataContext';
import Nav from '../nav/nav';
import Likes from './likes';
import EditPost from './editPost';
import Comments from '../comments/comments';

function Forum (props){

    const data = useContext(DataContext);
   
    return(
        <div>
            <Nav/>
            <div>{}</div>
            <main class= 'container d-flex flex-column align-items-center mt-5 p-0'>{data.posts.map(post=>(
                <div class='mb-5 post' id ={post.id}>
                <div className="postContainer p-2 position-relative">
                    <div class='d-flex justify-content-center'>
                    <h2 class='mb-0' >{post.title}</h2>
                    <EditPost author = {post.author} uploadId = {post.id}/>
                    </div>
                    <div class='text-center mb-2'>Posted by {post.name}</div>
                    <div class='d-flex justify-content-center mb-3'>
                        <img class='gif' src={post.content} alt="pic" />
                    </div>
                    <Likes uploadId = {post.id}/>
                </div>
                <Comments uploadId = {post.id}/>
                {/* <MakeComment uploadId2= {props.uploadId}/> */}
            </div>
            ))}</main> 
        </div>
    )
}

export default Forum;