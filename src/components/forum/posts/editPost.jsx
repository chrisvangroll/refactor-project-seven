import React from 'react';
import {Link } from 'react-router-dom';

function EditPost (props) {

   // const [uploadId, setId] = useState(props.uploadId5);


    function getStorage(){
        let userId = localStorage.getItem('id');
        let admin = localStorage.getItem('admin');
        userId = JSON.parse(userId);
        admin = JSON.parse(admin);
        let users =[]
        users.push(admin);
        users.push(userId);
        return users;
    }
    //console.log(getStorage())
    const toEdit = () =>{
        if(getStorage()[0] === getStorage()[1]){
            return ''
        }else{
            return props.author1 === getStorage()[1] ? "" : "d-none";
        }
        
    } 

   
    return(
        <div class='position-absolute postEditIcon' id ={props.uploadId}>
            <Link  className = {toEdit()} to={{pathname: "/modify", state: {uploadId: props.uploadId5 } }}><i class="fas fa-edit"></i></Link>
        </div>
    )
}

export default EditPost;