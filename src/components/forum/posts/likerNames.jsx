import React from 'react'

export default function ListOfLikers(props) {
    //console.log(props.likers)
    return (
        <ul id= {`likesFor${props.uploadId11}`} class='d-none d-flex flex-column likeList position-absolute ' >
            <il class='mb-2'>Liked by:</il>
           {props.likers.map(name =>(
               <il>{name.name}</il>
           ))}
        </ul>
    )
}
