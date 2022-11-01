import axios from 'axios'
import React, { useState } from 'react'
import GameCard from './Gamecard'

const NFL = (game) => {

  const [allNFL, setAllNFL] = useState([])

const getNFLGames = () => {
        axios.get('https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=eb3d28bf2014bd86fca0c001937c362e&regions=us&markets=h2h,spreads,totals&limit=13&oddsFormat=american')
        .then((res) => {
            console.log(res.data)
            setAllNFL(res.data)
        })
    }
  return (
    <div>
        <h2>NFL</h2>
        <button className='load-btn' id="load-btn" onClick={getNFLGames}>Load NFL Games</button>
        <div className='NFL-container'>
          {allNFL.map((g, i) => {
            return <GameCard game={g} index={i}/>
          })}
        </div>
    </div>
  )
}

export default NFL