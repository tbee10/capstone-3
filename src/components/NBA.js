import axios from 'axios'
import React, {useState} from 'react'
import GameCard from './Gamecard';

const NBA = () => {

  const [allNBA, setAllNBA] = useState([]);

  const getNBAGames =() => {
    axios.get("https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=eb3d28bf2014bd86fca0c001937c362e&regions=us&markets=h2h,spreads&oddsFormat=american")
      .then((res) => {
        console.log(res.data)
        setAllNBA(res.data)
      })
  }
  return (
    <div>
        <h2>NBA</h2>
        <button className='load-btn' id="load-btn" onClick={getNBAGames}>Load NBA Games</button>
        <div className='NBA-container'>
          {allNBA.map((g, i) => {
            return <GameCard game={g} index={i}/>
          })}
        </div>
    </div>
  )
}

export default NBA