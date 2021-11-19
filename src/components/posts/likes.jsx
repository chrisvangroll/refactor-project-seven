import React, {useEffect, useState, useContext} from 'react';
import Axios from 'axios';
import { DataContext } from '../../dataContext';
import ListOfLikers from './likerNames';

function Likes (props) {
    const data = useContext(DataContext);
    const [likes, setLikes] = useState([]);
    const [likeNames, setLikeNames] = useState([]);

    useEffect(() =>{
        getLikes();
    }, []);

    const getLikes = async ()=>{
        let config = {
            headers : {
                Authorization: JSON.parse(localStorage.getItem('token')) 
            } 
        }
        try{
            const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/forum/likes/' + props.uploadId, config);
            setLikes(res.data.length); 
            setLikeNames(res.data);
            
        }catch(err){
            console.log(err);
        }
    }
  
    const sendLike = async ()=>{
        let config = {
            headers : {
                Authorization: JSON.parse(localStorage.getItem('token')) 
            } 
        }
        try{
        const res = await Axios.post('https://p7-backend-cvg.herokuapp.com/forum/likes', {
            userId : data.user,
            uploadId: props.uploadId 
        }
            );
            console.log(res);
        }catch(err){
            console.log(err);
        }
        getLikes();
    }
    const showNames = () =>{
        document.getElementById(`likesFor${props.uploadId}`).classList.toggle('d-none')
    }

    const numberOfLikes =()=>{
      return likes === '1' ? `${likes} like` : `${likes} likes`
    }


    return(
        <div >
            <div class='d-flex mt-2 justify-content-between position-relative'>
                <div class='ms-2 postLikeBtn d-flex align-items-center'  onClick={sendLike}><i class="far fa-heart postLikeBtn "></i></div>
                <div class='p-2 likeNumber fw-bold' onMouseEnter={showNames} onMouseLeave={showNames}>{numberOfLikes()}</div>
                <ListOfLikers uploadId1={props.uploadId} likers ={likeNames}/>
            </div>
        </div>
    )
}

export default Likes;