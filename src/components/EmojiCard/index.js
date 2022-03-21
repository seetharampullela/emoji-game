// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisItem, shuffledEmojis} = props
  const {id, emojiName, emojiUrl} = emojisItem

  const changeEmoji = () => {
    shuffledEmojis(id)
  }

  return (
    <li>
      <button
        type="button"
        className="emoji-button"
        onClick={changeEmoji}
        key={id}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
