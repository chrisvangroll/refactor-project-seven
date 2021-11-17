import React, {useState} from 'react';
//import '../styles/auth.css';
//import './auth.css';
import Axios from 'axios';
import {Link } from 'react-router-dom';
import Logo from '../../images/icon-left-font-monochrome-black.webp'



function Signup (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const regName = (e) =>{
        setName(e.target.value);
        console.log(name)
    }

    const regEmail = (e) =>{
        setEmail(e.target.value);
        console.log(email)
    }

    const regPassword = (e) =>{
        setPassword(e.target.value);
        console.log(password)
    }

    const regConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
        console.log(confirmPassword)
    }

    const validateFormData = ()=>{
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setMessage('Invalid email')
        }
        else if(name.length < 1){
            setMessage('Name is required')
        }
        else if(password.length < 6){
            setMessage('Password must be at least 6 characters long')
        }
        else if(password.length < 6){
            setMessage('Password must be at least 6 characters long')
        }
        else if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }

        else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            setMessage('Password must contain at lease one uppercase letter, one lowercase letter, and one digit')
        }
        else{
            sendSignUpData()
        }
    }

    const sendSignUpData = async ()=>{
        try{
            const res = await Axios.post('https://p7-backend-cvg.herokuapp.com/auth/signup',{
            name: name,
            email: email,
            password: password
            })

            function setStorage(value){
                localStorage.setItem('id', JSON.stringify(value));
            }
            setStorage(res.data.userId);
            window.location = 'forum';
        }catch(err){
            console.log(err)
        }
      };
    return(
        <div class='container authContainer d-flex justify-content-center align-items-center'>
        <div class='registrationWrapper'>
            <img class='authLogo' src={Logo} alt="" />
            <h1 class='text-center fs-2 mb-3'>Sign Up</h1>
            <form action="">
                <input class='w-100 mb-3' title='name' type="text" id="name" placeholder='Name' onChange = {regName}/>
                <input class='w-100 mb-3' title ='email' type="email" id="email" placeholder='Email' onChange = {regEmail}/>
                <input class='w-100 mb-3' title='password' type="Password" id="password" placeholder='Password' onChange = {regPassword}/>
                <input class='w-100 mb-3' title='confirm password' type="Password" id="confirmPassword" placeholder='Confirm Password' onChange = {regConfirmPassword}/>
            </form>
            <button class='w-100 buttonOne' onClick = {validateFormData}>Sign Up</button>
                <div class='d-flex mt-3 justify-content-center p-0'>
                    <div class='me-2'>Already a member?</div>
                    <Link class="nav-link p-0" to="/">Login</Link> 
                </div>
            <div class='text-center mt-2 fw-bold m-auto errorMessage'>{message}</div>
            {/* <h2>{message}</h2> */}
            <br />
        </div>
        
    </div>
            
            
            
        
    )
}

export default Signup;