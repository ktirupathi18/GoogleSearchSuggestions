// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, onclicker} = props
  const {suggestion} = details
  const onClickFun = () => {
    onclicker(suggestion)
  }
  return (
    <div className="search-containers">
      <p className="search-result">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onClickFun}
      />
    </div>
  )
}

export default SuggestionItem
