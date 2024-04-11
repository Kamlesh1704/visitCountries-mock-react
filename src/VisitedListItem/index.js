import './index.css'

const VisitedListItem = props => {
  const {details, onRemove} = props
  const {id, name, imageUrl} = details
  const onRemoving = () => {
    onRemove(id)
  }
  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button type="button" onClick={onRemoving}>
        Remove
      </button>
    </li>
  )
}
export default VisitedListItem
