import React from 'react';

function PostToModify (props) {
    return(
        <div>
            <div> modify post</div>
            <h2>{props.title}</h2>
            <img src={props.content} alt="" />
            <button></button>

           
        </div>
    )
}

export default PostToModify;