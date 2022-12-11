import {useState, useEffect} from "react";
import "./ItemListContainer.css";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const{categoryName} = useParams()
  const [items, setItems] = useState([])

  useEffect(()=>{
    const productsFiltered = products.filter(
      (products) => products.category === categoryName
    )

    const task = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(categoryName ? productsFiltered : products)
      }, 300)
    })

    task
    .then((res)=>{
      setItems(res)
    })
    .catch((err)=>{
      console.log("se rechazo")
    })
    
  }, [categoryName])

  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer