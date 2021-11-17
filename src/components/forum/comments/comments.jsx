import React, {useEffect, useState} from 'react';
import Comment from './comment.jsx';
import Axios from 'axios';
//import { Button, Collapse } from 'react-bootstrap';
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

function Comments (props) {
    //const [open, setOpen] = useState(false);
    useEffect(() =>{
        getComments();
    }, []);

    const [comments, setComments] = useState([]);
//console.log(comments)
    const getComments = async ()=>{
        try{
            const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/comment/' + props.uploadId3);
            setComments(res.data); 
            //console.log(res.data);
            
        }catch(err){
            console.log(err);
        }
    }

    const [comment, setComment] = useState('');

    const logComment = (e) =>{
        setComment(e.target.value);
        // console.log(comment);
    }

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const clearInputField = () =>{
       document.getElementById(`input${props.uploadId3}`).value='';
    }

    const sendComment = async ()=>{
        try{
            const res = await Axios.post('https://p7-backend-cvg.herokuapp.com/comment',{
            userId: getStorage(),
            uploadId: props.uploadId3,
            content : comment
            });
            console.log(res.data.message);
            getComments();
            clearInputField()
        }catch(err){
            console.log(err)
        }
      };

    const toggleCommentSection = () =>{
        document.getElementById(`commentSection${props.uploadId3}`).classList.toggle('d-none');
    }

    const handleKeyPressComment = e => {
        //console.log(e.key)
        if (e.key === 'Enter') {
            sendComment();
        }
        };
 
    return(
        <div class= 'allCommentsContainer'>
            <button  class='commentBtn mb-3'
            onClick={toggleCommentSection}
                >
                Comments {`(${comments.length})`}
            </button>
            <div id={`commentSection${props.uploadId3}`} class='d-none commentSection'>{comments.map(comment=>(
                <Comment getComments = {getComments} commentId={comment.id}  uploadId3={comment.uploadId} comment={comment.comment} name={comment.name} commenter={comment.commenter}/>
            ))}</div>
        
            <div class= 'd-flex flex-row makeComment'>
                <input class= 'addComment' title='make a comment' type="text" onKeyPress = {handleKeyPressComment} id={`input${props.uploadId3}`} placeholder= 'Write a comment....' onChange = {logComment}/>
                <button class= 'submitCommentBtn' onClick = {sendComment}>Submit</button>
            </div>
        </div>
    )
}

export default Comments;