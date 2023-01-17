import './index.css'

const NavBar = props => {
  const {score, top} = props

  return (
    <div className="n1">
      <div className="n2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="i1"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="n2">
        <p>Score: {score}</p>
        <p>Top Score: {top}</p>
      </div>
    </div>
  )
}

export default NavBar
