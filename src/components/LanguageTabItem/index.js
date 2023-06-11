import './index.css'

const LanguageTabItem = props => {
  const {tabItem, isActive, changeActiveId} = props
  const activeButtonClassName = isActive ? 'active-button' : 'normal-button'

  const {id, buttonText} = tabItem

  const onChangeGreetingLanguage = () => {
    changeActiveId(id)
  }

  return (
    <li className="tab-item">
      <button
        className={activeButtonClassName}
        type="button"
        onClick={onChangeGreetingLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageTabItem
