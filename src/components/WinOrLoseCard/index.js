// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, replayTheGame} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'

  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="score-container">
      <div className="score-value">
        <h1 className="game-status">{gameStatus}</h1>
        <p>{scoreStatus}</p>
        <p className="score">{score}/12</p>
        <button type="button" onClick={replayTheGame} className="play-button">
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt="win or lose" className="status-image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
