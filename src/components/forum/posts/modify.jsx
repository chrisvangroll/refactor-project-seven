import React, {useEffect, useState} from 'react';
import Nav from '../../nav/nav';
import { useLocation } from "react-router-dom";
import Axios from 'axios';
//import { useParams } from "@reach/router";


function Modify (props) {
    const location = useLocation();
    const uploadId = location.state?.uploadId;

    //console.log(uploadId)
    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState();
    const [title, setTitle] = useState('');
    
    const setTitleState = (e) =>{
        setTitle(e.target.value);
        //console.log(title)
    }
   // console.log(imageUrl)
    useEffect(() =>{
        getPost();
    }, []);
   

    const getPost = async ()=>{
        let config = {
            headers : {
                Authorization: JSON.parse(localStorage.getItem('token')) 
            } 
        }
        try{
            const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/forum/' + uploadId + '/post');
            setPost(res.data);
            setImageUrl(res.data[0].content);
            //setImageUrl(post[0].content);
            setTitle(res.data[0].title);
            //setTitle(post[0].title);
            setLoading(false);
          
            
        }catch(err){
            console.log(err);
        }
    }



    const deletePost = async () =>{
        try{
            const res = await Axios.delete('https://p7-backend-cvg.herokuapp.com/forum/' + post[0].id);
            console.log(res)
            window.location = 'forum'
        }catch(err){
            console.log(err)
        }
    }

    //console.log(imageUrl[0])

    const updatePost = async ()=>{
        
        const formData = new FormData();
        formData.append('gif', imageUrl[0]);
        formData.append('title', title);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        try{
            const res = await Axios.put('https://p7-backend-cvg.herokuapp.com/forum/' + post[0].id, formData)
            console.log(res);
            console.log('updated successfully');
            window.location = 'forum';
        }catch(err){
            console.log(err)
        }
      };
    //console.log(post[0].id)
    // // console.log(post[0].id)
    // console.log(post[0].content)
    // console.log(post[0].title)
    if (isLoading) {
        return <div>Loading...</div>;
      }

    return(
        <div>
            <Nav/>
            <div class=' d-flex flex-column align-items-center makePost container mt-5'>
                <div>
                    <h2>{post[0].title}</h2>
                    <label htmlFor="title">Modify Title</label>
                    <input class='w-100' type="text" id='title' onChange={setTitleState} />
                    <img class='mt-4 mb-2 modifyImg' src={post[0].content} alt="" />
                    <label class='d-block mb-2' htmlFor="file">Upload your file</label>
                    <input class='mb-3' type="file" id="file" onChange = {(e) => setImageUrl(e.target.files)}/>
                    <button class='me-3 buttonOne' onClick= {deletePost}>Delete Post</button>
                    <button class='buttonOne' onClick={updatePost}>Modify Post</button>
                </div>
                
            </div>
           
        </div>
    )
}

export default Modify;