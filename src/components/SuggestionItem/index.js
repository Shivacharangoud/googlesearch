import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onArrowFunc} = props
  const {id, suggestion} = eachSuggestion

  const onArrowClick = () => {
    onArrowFunc(id, suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button onClick={onArrowClick} type="button" className="button">
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
