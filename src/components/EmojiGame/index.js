/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    scoreCount: 0,
    maxScore: 0,
    clickedEmojisList: [],
    isGameOngoing: true,
  }

  resetEmojiGame = () => {
    this.setState({scoreCount: 0, clickedEmojisList: [], isGameOngoing: true})
  }

  finishEmojiGameSetMaxScore = scoreCount => {
    const {maxScore} = this.state
    let updatedTopScore = maxScore

    if (scoreCount > updatedTopScore) {
      updatedTopScore = scoreCount
    }
    this.setState({
      maxScore: updatedTopScore,
      isGameOngoing: false,
    })
  }

  shuffledEmojis = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const lengthOfClickedEmojisList = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishEmojiGameSetMaxScore(lengthOfClickedEmojisList)
    } else {
      if (emojisList.length - 1 === lengthOfClickedEmojisList) {
        this.finishEmojiGameSetMaxScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        scoreCount: prevState.scoreCount + 1,
      }))
    }
  }

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderShuffledEmojis = () => {
    const shuffledEmojisList = this.getShuffledEmojis()
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            emojisItem={each}
            shuffledEmojis={this.shuffledEmojis}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  renderGameStatus = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        replayTheGame={this.resetEmojiGame}
        score={clickedEmojisList.length}
      />
    )
  }

  render() {
    const {scoreCount, maxScore, isGameOngoing} = this.state

    return (
      <div className="bg-container">
        <NavBar
          scoreCount={scoreCount}
          maxScore={maxScore}
          isGameOngoing={isGameOngoing}
        />
        <div className="inner-container">
          {isGameOngoing
            ? this.renderShuffledEmojis()
            : this.renderGameStatus()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
