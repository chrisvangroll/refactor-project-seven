import React from 'react';
//import MakeComment from './makeComment.jsx';
import Comments from '../comments/comments';
import Likes from './likes.jsx';
import EditPost from './editPost.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function Post (props) {
    
   
    return(
        <div class='mb-5 post' id ={props.uploadId}>
            <div className="postContainer p-2 position-relative">
                <div class='d-flex justify-content-center'>
                <h2 class='mb-0' >{props.title}</h2>
                <EditPost author1 = {props.author} uploadId5 = {props.uploadId}/>
                </div>
                <div class='text-center mb-2'>Posted by {props.name}</div>
                <div class='d-flex justify-content-center mb-3'>
                    <img class='gif' src={props.content} alt="pic" />
                </div>
                <Likes uploadId4 = {props.uploadId}/>
            </div>
            <Comments uploadId3 = {props.uploadId}/>
            {/* <MakeComment uploadId2= {props.uploadId}/> */}
        </div>
    )
}

export default Post;