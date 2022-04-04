import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  onChangeInput = event => {
    const text = event.target.value
    this.setState({search: text})
  }

  onArrow = (id, suggestion) => {
    this.setState({search: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const lowercaseSearch = search.toLowerCase()

    const filteredList = suggestionsList.filter(each => {
      const suggestion = each.suggestion.toLowerCase()
      return suggestion.includes(lowercaseSearch)
    })
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="cards-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              onChange={this.onChangeInput}
              placeholder="search"
              type="search"
              className="input"
              value={search}
            />
          </div>
          <ul className="items-container">
            {filteredList.map(each => (
              <SuggestionItem
                onArrowFunc={this.onArrow}
                eachSuggestion={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
