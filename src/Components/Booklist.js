import React from 'react'
import '../App'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../API';
import { useAppContext } from './Context/appContext';
import { useNavigate } from 'react-router-dom';


const Booklist = () => {
 
    
    const[posts,setPosts]=useState([]);
    


    const navigate=useNavigate();

    const {favorites, addToFavorites, removeFromFavorites}=useAppContext();

    console.log("favorite are", favorites)

    const favoriteChecker=(id)=>{
        const boolean=favorites.some(((book)=>book.id ===id));
        return boolean;
    }


    useEffect(()=>{
        const fetchPosts=async()=>{
          
            const res=await   axios.get(API_URL);
            setPosts(res.data)
           
        }
      fetchPosts();
      

    },[])








  return (
    <div>
    
   
    
    <div className='book-list'>
        {posts.map((item)=>(
            <div key={item.id} className='book'>
                <div><h4>{item.title}</h4></div>
                <div><img src={item.image_url} alt='#' onClick={()=>navigate(`/books/${item.id}`)}/></div>
                {favoriteChecker(item.id) ?  <div><button onClick={()=> removeFromFavorites(item.id)}>Remove from Favorite</button></div>: <div><button onClick={()=> addToFavorites(item)}>Add to Favorite</button></div> 
                }
                
            </div>
        ))}
    </div>
    </div>
  )
}

export default Booklist