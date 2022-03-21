// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreCount, maxScore, isGameOngoing} = props

  return (
    <nav className="navbar-container">
      <div className="left-elements">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameOngoing && (
        <div className="right-elements">
          <p className="score-count">Score: {scoreCount}</p>
          <p>Top Score: {maxScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
