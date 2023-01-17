import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

const stsArray = []

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, normal: true}

  check = id => {
    // const {score} = this.state
    if (!stsArray.includes(id)) {
      stsArray.push(id)
      this.setState(prev => ({
        score: prev.score + 1,
        topScore: prev.topScore + 1,
      }))
      if (stsArray.length === 12) {
        this.setState(prev => ({normal: !prev.normal}))
      }
    } else {
      this.setState(prev => ({score: 0, normal: !prev.normal}))
    }
    console.log(stsArray)
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, normal} = this.state
    return (
      <div>
        <NavBar score={score} top={topScore} />
        <div>
          {normal && (
            <ul className="it1">
              {emojisList.map(each => (
                <EmojiCard details={each} key={each.id} show={this.check} />
              ))}
            </ul>
          )}
          {!normal && <WinOrLoseCard score={score} />}
        </div>
      </div>
    )
  }
}

export default EmojiGame
