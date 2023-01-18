// Write your code here

import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

let suggestList

const GoogleSuggestions = props => {
  const {suggestionsList} = props
  suggestList = suggestionsList
  return <Suggestions />
}

class Suggestions extends Component {
  state = {
    searchInput: '',
    resultedList: suggestList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClicker = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {resultedList, searchInput} = this.state
    const onCompare = (name, search) => {
      const modifyName = name.toLowerCase()
      const modifySearch = search.toLowerCase()

      return modifyName.includes(modifySearch)
    }

    const searchResults = resultedList.filter(eachOne =>
      onCompare(eachOne.suggestion, searchInput),
    )

    return (
      <div className="container" alt="Google">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
          <div className="search-container">
            <form className="searchForm">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </form>
            <ul className="card-hold">
              {searchResults.map(each => (
                <li type="none" key={each.id}>
                  <SuggestionItem
                    details={each}
                    onclicker={this.onClicker}
                    key={each.value}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
