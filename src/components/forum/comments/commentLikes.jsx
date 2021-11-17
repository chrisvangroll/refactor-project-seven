import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import ListOfCommentLikers from './listOfCommentLikers';

function CommentLikes (props) {

    useEffect(() =>{
        getLikes();
    }, []);

    const [commentLikes, setCommentLikes] = useState([]);
    const [commentLikers, setCommentLikers] = useState([]);

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const getLikes = async ()=>{
        try{
            const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/comment/' + props.commentId2 + '/upvote/');
            setCommentLikes(res.data.length); 
            setCommentLikers(res.data)
        }catch(err){
            console.log(err);
        }
    }
  
    const sendLike = async ()=>{
        try{
        const res = await Axios.post('https://p7-backend-cvg.herokuapp.com/comment/upvote',{
            userId : getStorage(),
            commentId: props.commentId2 
        }
            );
        console.log(res.data);
        }catch(err){
            console.log(err);
        }
        getLikes();
       
    }

    // document.querySelector('body').addEventListener('click', () =>{
    //     showList();
    //   })

    const showList = ()=>{
        document.getElementById(`likes${props.commentId2}`).classList.toggle('d-none');
    }
    return(
        // <div >
        //     <button onClick={sendLike}>Like</button>
        //    <div>Number of likes = {likes}</div>
        // </div>
        <div id={`commentLikes${props.commentId2}`} class = 'd-flex flex-row likeContainer'>
            <div class = 'd-flex flex-row'>
                <div class='likeButton d-flex align-items-center' onClick={sendLike}><i class="far fa-heart likeButton"></i></div>
                <div onClick={showList} class='me-1 fw-bold numberOfCommentLikes p-2'>{commentLikes}</div>
            </div>
            <ul id={`likes${props.commentId2}`} class='d-none d-flex flex-column commentLikers'>
                <div class='mb-2'>
                    Liked by:
                </div>
                 {commentLikers.map(name=>(
                <ListOfCommentLikers name={name.name}/>
            ))}</ul>
        </div>
    )
}

export default CommentLikes;