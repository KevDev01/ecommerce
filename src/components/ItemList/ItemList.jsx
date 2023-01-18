import Item from "../Item/Item"

const ItemList = ({items}) => {
  return (
    <div className="container-cards">
        {items.map((element)=>{
            return <Item key={element.id} element = {element}/>
        })}
    </div>
  )
}

export default ItemList