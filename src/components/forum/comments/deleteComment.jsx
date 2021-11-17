import React from 'react'
import Axios from 'axios';

export default function DeleteComment(props) {
//console.log('here' + props.commentId4)
      const deleteComment = async () =>{
        try{
            const res = await Axios.delete('https://p7-backend-cvg.herokuapp.com/comment/' + props.commentId4 +'/remove/');
            console.log(res.data);
            props.getComments1();
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div >
            <button class='updateDeleteComment' onClick={deleteComment}>Delete Comment</button>
        </div>
    )
}
