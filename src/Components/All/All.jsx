import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './All.css'
import Loadindscreen from '../LoadingScreen/Loadindscreen';

function All(props) {
    const [allGames, setAllGames] = useState(null);
    async function getAllGames(){
      
        try {
            const {data}=await axios.get(' https://free-to-play-games-database.p.rapidapi.com/api/games',{
            headers:{'X-RapidAPI-Key': 
            'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
        });
      //  console.log(data);
        setAllGames(data);
        } catch (error) {
            console.log("error", error);
        }
    }


    useEffect(function(){
        getAllGames();
    },[])
    return <>
    {allGames?(<div className="container p-5">
        <div className="row g-3">
           {allGames.map(function(game,indx){
           return <Link key={indx} to={`/gamedetails/${game.id}`} className="col-lg-3" style={{color:'inherit',textDecorationLine:'none'}}><div>
           <div className="card" style={{backgroundColor:'#32383E'}}>
               <img src={game.thumbnail} alt={game.title} className='img-fluid'/>
               <div className='card-body'>
              <div className="title d-flex justify-content-between align-items-center">
              <h4>{game.title}</h4>
              <Link className='text-white btn btn-primary'>Free</Link>
              </div>
               <p>{game.short_description.slice(1,30)}..</p>
               <div className="txt d-flex justify-content-between align-items-center">
                   <span className='bg-secondary p-1 rounded-1'>+</span>
                   <span>{game.genre}</span>
               </div>
               </div>
           </div>
       </div></Link>
           })}
        </div>
    </div>):<Loadindscreen/>}
    </>
}

export default All;