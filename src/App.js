import {Component} from 'react'

import LanguageTabItem from './components/LanguageTabItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  changeActiveId = activeId => {
    this.setState({activeId})
  }

  render() {
    const {activeId} = this.state

    const activeDetails = languageGreetingsList.find(
      eachItem => eachItem.id === activeId,
    )
    return (
      <div className="multi-lingual-app-container">
        <div className="multi-lingual-container">
          <h1 className="app-heading">Multilingual Greetings</h1>
          <ul className="language-tab-container">
            {languageGreetingsList.map(eachLanguageItem => (
              <LanguageTabItem
                tabItem={eachLanguageItem}
                key={eachLanguageItem.id}
                isActive={eachLanguageItem.id === activeId}
                changeActiveId={this.changeActiveId}
              />
            ))}
          </ul>
          <div className="greetings-container">
            <img
              src={activeDetails.imageUrl}
              alt={activeDetails.imageAltText}
              className="greetings-image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App
