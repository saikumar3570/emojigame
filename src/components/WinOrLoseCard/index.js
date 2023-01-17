import './index.css'

const WinOrLoseCard = props => {
  const {score} = props
  const win = (
    <div className="w1">
      <div>
        <h1>You Won</h1>
        <p>Best Score</p>
        <p>12/12</p>
        <button type="button">Play Again</button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
  const lose = <div>Lose</div>

  return <div>{score === 12 ? win : lose}</div>
}

export default WinOrLoseCard
