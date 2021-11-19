import React, {useState, useRef, useLayoutEffect, useContext} from 'react';
import CommentLikes from './commentLikes';
import Axios from 'axios';
import DeleteComment from './deleteComment';
import {DataContext} from '../../dataContext';

function Comment (props) {
    
    const data = useContext(DataContext);
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const [commentEdit, setCommentEdit] = useState(props.comment);


    useLayoutEffect(() => {
        
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight
          });
        
      }, []);

    const logCommentEdit = (e) =>{
        setCommentEdit(e.target.value);
    }

    const updateComment = async ()=>{
        
        try{
            const res = await Axios.put('https://p7-backend-cvg.herokuapp.com/comment/', {
                id: props.commentId,
                comment: commentEdit
            })
            console.log(res);
            console.log('updated successfully');
            props.getComments();
            finalToggle();
        }catch(err){
            console.log(err)
        }
      };

  const toEdit = () =>{
    return props.commenter === data.user ? "" : "d-none";
} 
   const toggleClass = () =>{
    document.getElementById(`edit${props.commentId}`).classList.toggle('d-none');
    setDimensions({
        width: targetRef.current.offsetWidth + 10,
        height: targetRef.current.offsetHeight
      });
}
    const handleKeyPress = e => {
    if (e.key === 'Enter') {
        updateComment();
    }
    };

    const toggleEditBox = () =>{
        document.getElementById(`edit${props.commentId}`).classList.toggle('d-none')
        document.getElementById(`editBox${props.commentId}`).classList.toggle('d-none')
        document.getElementById(`editSubmit${props.commentId}`).classList.toggle('d-none')
        document.getElementById(`edit${props.commentId}btn`).classList.toggle('d-none')
        document.getElementById(`commentLikes${props.commentId}`).classList.toggle('d-none')
        setCommentEdit(props.comment);
    }
    const finalToggle = () =>{
        document.getElementById(`edit${props.commentId}`).classList.toggle('d-none')
        document.getElementById(`editSubmit${props.commentId}`).classList.toggle('d-none')
        document.getElementById(`editBox${props.commentId}`).classList.toggle('d-none')
        document.getElementById(`edit${props.commentId}btn`).classList.toggle('d-none')
        document.getElementById(`commentLikes${props.commentId}`).classList.toggle('d-none')
    }


    return(
        
        <div class= 'd-flex flex-row commentContainer position-relative'>
            <div ref={targetRef} id={`${props.commentId}comment`}  class='comment position-relative'>
                {props.comment}
                <div class='fw-bold'>{`By ${props.name}`}</div>
            </div>
            <CommentLikes  commentId2 = {props.commentId}/>
           
            <div id={`edit${props.commentId}btn`} class='editCommentBtn'  onClick = {toggleClass} >
                <div className={toEdit()} >
                    <i class="fas fa-edit"></i>
                    <div id={`edit${props.commentId}`} class='d-none mt-1 position-absolute deleteAndEditContainer'>
                        <DeleteComment  getComments1={props.getComments} commentId4={props.commentId}/>
                        <button class='updateDeleteComment' onClick={toggleEditBox}>Edit Comment</button>
                    </div>
                </div>
            </div>
            <textarea resetValue={setCommentEdit} type="text" title='update comment' style={dimensions} onKeyPress={handleKeyPress} onChange={logCommentEdit} id={`editBox${props.commentId}`} value={commentEdit} class='position-absolute d-none editInput'/>
            <div id={`editSubmit${props.commentId}`} class='d-none'>
                <button class= 'cancelEdit fw-bold' onClick={finalToggle}>X</button>
            </div>
        </div>
       
    )
}

export default Comment;