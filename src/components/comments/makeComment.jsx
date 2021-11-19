// import React, {useState} from 'react';
// import Axios from 'axios';

// const MakeComment = (props) =>{
   
//     const [comment, setComment] = useState('');

//     const logComment = (e) =>{
//         setComment(e.target.value);
//     }

//     function getStorage(){
//         let userId = localStorage.getItem('id');
//         userId = JSON.parse(userId);
//         return userId;
//     }
 
//     const sendComment = async ()=>{
//         try{
//             const res = await Axios.post('http:///comment',{
//             userId: getStorage(),
//             uploadId: props.uploadId2,
//             content : comment
//             });
          
//            // document.getElementById(`input${props.uploadId2}`).value='';
//             console.log(res);
            
//         }catch(err){
//             console.log(err)
//         }
//       };
//     return (
//         <div>
//             <h3>Post a comment</h3>
//             <input class='inputComment' type="text" onChange = {logComment}/>
//             <button class='submitCommentBtn' onClick = {sendComment}>submit comment</button>
//         </div>
//     )
// }

// export default MakeComment;