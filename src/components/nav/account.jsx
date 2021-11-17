import React from 'react';
import Nav from './nav.jsx';
import Axios from 'axios';
//import Utils from '../../utils'

function Account (){
    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const deleteUser = async () =>{
        try{
            const res = await Axios.delete('https://p7-backend-cvg.herokuapp.com/auth/delete',{
            data:{
                userId : getStorage()
            }
            });
            console.log(res)
            window.location = 'signup'
        }catch(err){
            console.log(err)
        }
    }


    return(
        <div>
            <Nav/>
            <div class='d-flex flex-column align-items-center makePost container mt-5'>
                <div>
                    <h1 class='text-center'>Account</h1>
                    <button class='buttonOne mt-3' onClick = {deleteUser}>Delete Account</button>
                </div>
            </div>

        </div>
    )
}

export default Account;