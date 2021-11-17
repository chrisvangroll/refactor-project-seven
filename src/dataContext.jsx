import React,{useState, createContext, useEffect} from "react";
import Axios from 'axios';
export const DataContext = createContext();


export const DataProvider = (props) => {

    useEffect(() =>{
        getPosts();
        // getAdmin();
    }, []);
    
    const [posts, setPosts] = useState([]);

//     function setStorage(value){
//         localStorage.setItem('admin', JSON.stringify(value));
//     }
//    ;
    // const getAdmin = async () =>{
        
    //     try{
    //         const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/forum/admin'); 
    //         setStorage(res.data[0].adminId);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    const getPosts = async ()=>{
        let config = {
            headers : {
                Authorization: JSON.parse(localStorage.getItem('token')) 
            } 
        }
        try{
            const res = await Axios.get('https://p7-backend-cvg.herokuapp.com/forum', config 
            );
           
            setPosts(res.data.reverse()); 
            console.log(posts);
           // console.log(res.data.reverse()); 
             
            
        }catch(err){
            console.log(err);
        }
    }



 return(
     <DataContext.Provider value={{posts: posts}}>
         {props.children}
     </DataContext.Provider>
 );
}