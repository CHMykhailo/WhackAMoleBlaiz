import React, { Component } from 'react';

class GameOver extends Component {

  render(){
    return (
      <div className="game__game-over" style={{ display: this.props.context.state.gameOver }}>
        <h1 className="game__game-over-header" >GAME OVER!</h1>
        <p className="game__you-scored">Ваш рахунок { this.props.context.state.score }/0</p>
      </div>
    )
  };
}

export default GameOver; 
