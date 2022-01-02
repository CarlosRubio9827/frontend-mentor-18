import {useState} from 'react';
import axios from 'axios'

const useGetUser = () => {
    

    const [user, setUser] = useState({});
    const getUser =  async(API) =>{
        await axios.get(API)
        .then((response)=>{
            // console.log(response)
            // response.json();
            console.log(response.data)
            setUser(response.data);
        })
        .catch(()=>{
            setUser({error: 404});
        });
        
    }
    // const getUser = async (API) =>{
    //     let response = await fetch(API);        
    //     response = awdataait response.json()
    //     setUser(response);
    //     console.log(response)
    // }
    return {
        getUser,
        user,
    };
}


export default useGetUser;   

