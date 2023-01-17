import './index.css'

const EmojiCard = props => {
  const {details, show} = props
  const {id, emojiUrl, emojiName} = details
  function final() {
    show(id)
  }
  return (
    <li className="c1">
      <button type="button" onClick={final}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
