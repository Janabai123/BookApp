import React from 'react'
import '../App'
import { useAppContext } from './Context/appContext';
import { useNavigate } from 'react-router-dom';


const Favorites = () => {
  const navigate=useNavigate()

  const {favorites, addToFavorites, removeFromFavorites}=useAppContext();

  console.log("favorite are", favorites)

  const favoriteChecker=(id)=>{
      const boolean=favorites.some(((book)=>book.id ===id));
      return boolean;
  }

  return (
    <div className='favorites'>
 {favorites.length > 0 ? favorites.map((item)=>(
            <div key={item.id} className='book'>
                <div><h4>{item.title}</h4></div>
                <div><img src={item.image_url} alt='#' onClick={()=>navigate(`/books/${item.id}`)}/></div>
                {favoriteChecker(item.id) ?  <div><button onClick={()=> removeFromFavorites(item.id)}>Remove from Favorite</button></div>: <div><button onClick={()=> addToFavorites(item)}>Add to Favorite</button></div> 
                }
                
            </div>
        )):<h1>You Don't have any Favorite book!!</h1>}


    </div>
  )
}

export default Favorites