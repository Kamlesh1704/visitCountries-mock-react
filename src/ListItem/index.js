import './index.css'

const ListItem = props => {
  const {details, onVisitCountry} = props
  const {name, isVisited, id} = details
  const buttonClass = isVisited ? 'darkButton' : 'blueButton'
  const buttonText = isVisited ? 'Visited' : 'Visit'
  const onVisit = () => {
    onVisitCountry(id)
  }
  return (
    <li>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onVisit} className={`${buttonClass}`}>
          Visit
        </button>
      )}
    </li>
  )
}

export default ListItem
