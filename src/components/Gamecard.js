import React from 'react'

const GameCard = ({game}) => {

    const homeSpread = game.bookmakers[0].markets[1].outcomes[0].point
    const awaySpread = game.bookmakers[0].markets[1].outcomes[1].point

  return (
    <div className='game-card'>
        <h6>{game.away_team}</h6>
        <div>{awaySpread}</div>
        <button className='bet-btn'>Bet Away Team</button>
        <h6>{game.home_team}</h6>
        <div>{homeSpread}</div>
        <button className='bet-btn'>Bet Home Team</button>
    
    </div>
)
}

export default GameCard


