import React, { createContext, useState, useEffect} from "react";

export const WatchListContext= createContext();

export const WatchListProvider=({children}) =>{
    const [watchlist,setwatchlist]=useState([]);
    const [genreList, setGenreList]=useState([]);

     useEffect(()=>{
      let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=0c29a513422542c1f71267c935787e0a`;
      fetch (url)
      .then((response)=> response.json())
      .then((data)=> setGenreList(data.genres|| []));
    
     },[]);

    const toggleWatchlist=(movie)=>{
        const index=watchlist.findIndex((m) => m.id===movie.id);
        if(index===-1){
            setwatchlist([...watchlist,movie]);
        }
            else{
            setwatchlist([...watchlist.slice(0,index),...watchlist.slice(index+1)]);
            }
        } 

    return(
        <WatchListContext.Provider value={{watchlist,toggleWatchlist, genreList}}>
            {children}
        </WatchListContext.Provider>
    )

    };
