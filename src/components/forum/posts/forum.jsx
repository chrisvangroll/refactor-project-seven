import React, {useContext} from 'react';
import { DataContext } from '../../../dataContext';
// import Axios from 'axios';
//import {Link } from 'react-router-dom';
// import Post from './post';
import Nav from '../../nav/nav';

function Forum (props){

    const data = useContext(DataContext);
   
    return(
        <div>
            <Nav/>
            <main class= 'container d-flex flex-column align-items-center mt-5 p-0'>{data.posts.map(post=>(
                <div class='mb-5 post' id ={post.uploadId}>
                <div className="postContainer p-2 position-relative">
                    <div class='d-flex justify-content-center'>
                    <h2 class='mb-0' >{post.title}</h2>
                    {/* <EditPost author1 = {props.author} uploadId5 = {props.uploadId}/> */}
                    </div>
                    <div class='text-center mb-2'>Posted by {post.name}</div>
                    <div class='d-flex justify-content-center mb-3'>
                        <img class='gif' src={post.content} alt="pic" />
                    </div>
                    {/* <Likes uploadId4 = {props.uploadId}/> */}
                </div>
                {/* <Comments uploadId3 = {props.uploadId}/> */}
                {/* <MakeComment uploadId2= {props.uploadId}/> */}
            </div>
            ))}</main> 

             {/* <button onClick= {getPosts}>click for data</button>
            {displayPosts} */}
        </div>
    )
}

export default Forum;