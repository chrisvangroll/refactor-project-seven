import React, {useState}  from 'react';
//import {Link } from 'react-router-dom';
import Axios from 'axios';
import Nav from './nav.jsx';



function MakePost (props) {

    const [title, setTitle] = useState('');
    const [file, setFile] = useState();

    const sendTitle = (e) =>{
        setTitle(e.target.value);
    }
   
    const sendPost = async ()=>{
        function getStorage(){
            let userId = localStorage.getItem('id');
            userId = JSON.parse(userId);
            return userId;
        }

        const formData = new FormData();
        formData.append('gif', file[0]);
        formData.append('author', getStorage());
        formData.append('title', title);
        
        try{
            let config = {
                headers : {
                    Authorization: JSON.parse(localStorage.getItem('token')) 
                } 
            }
            const res = await Axios.post('https://p7-backend-cvg.herokuapp.com/forum', formData)
            console.log(res);
            window.location = 'forum';
        }catch(err){
            console.log(err)
        }
      };
    return(
        <div>
            <Nav/>
            <div class='d-flex flex-column align-items-center makePost container mt-5'>
            <div>
                <h1>Create Post</h1>
                    <form action="">
                        <label class='mt-1 mb-1' htmlFor="title">Title</label>
                        <input class='w-100' type="text" id="title" onChange = {sendTitle}/>
                        <label class='mt-3 mb-1' htmlFor="file">Upload your file</label>
                        <input type="file" id="file" onChange = {(e) => setFile(e.target.files)}/>
                    </form>
                    <button class='buttonOne mt-3' onClick = {sendPost}>Create Post</button>
                </div>
            </div>
            
        </div>
   
    )
}

export default MakePost;