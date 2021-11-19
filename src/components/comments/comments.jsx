import React, {useEffect, useState, useContext} from 'react';
import Comment from './comment.jsx';
import Axios from 'axios';
import { DataContext } from '../../dataContext.jsx';

function Comments (props) {
    
    const data = useContext(DataContext);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() =>{
        getComments();
    }, []);


    const getComments = async ()=>{
        try{
            const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/comment/' + props.uploadId);
            setComments(res.data); 
            
        }catch(err){
            console.log(err);
        }
    }

    const logComment = (e) =>{
        setComment(e.target.value);
    }

    const clearInputField = () =>{
       document.getElementById(`input${props.uploadId}`).value='';
    }

    const sendComment = async ()=>{
        try{
            const res = await Axios.post('https://p7-backend-cvg.herokuapp.com/comment',{
            userId: data.user,
            uploadId: props.uploadId,
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
        document.getElementById(`commentSection${props.uploadId}`).classList.toggle('d-none');
    }

    const handleKeyPressComment = e => {
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
            <div id={`commentSection${props.uploadId}`} class='d-none commentSection'>{comments.map(comment=>(
                <Comment getComments = {getComments} commentId={comment.id}  uploadId={comment.uploadId} comment={comment.comment} name={comment.name} commenter={comment.commenter}/>
            ))}</div>
        
            <div class= 'd-flex flex-row makeComment'>
                <input class= 'addComment' title='make a comment' type="text" onKeyPress = {handleKeyPressComment} id={`input${props.uploadId}`} placeholder= 'Write a comment....' onChange = {logComment}/>
                <button class= 'submitCommentBtn' onClick = {sendComment}>Submit</button>
            </div>
        </div>
    )
}

export default Comments;