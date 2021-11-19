import React,{useState, createContext, useEffect} from "react";
import Axios from 'axios';
export const DataContext = createContext();


export const DataProvider = (props) => {

    useEffect(() =>{
        getPosts();
        setUser(getStorage());
    }, []);
    
    const [posts, setPosts] = useState([]);
    const [user, setUser] =useState();




        function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

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
             
            
        }catch(err){
            console.log(err);
        }
    }

    


 return(
     <DataContext.Provider value={{posts: posts, user: user}}>
         {props.children}
     </DataContext.Provider>
 );
}