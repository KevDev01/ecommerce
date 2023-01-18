import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig";

const ItemListContainer = () => {
  const { categoryName } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {

    const itemCollection = collection(db, "products")

    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName))
      getDocs(q)
        .then((res) => {
          const products = res.docs.map(product => {
            return {
              ...product.data(),
              id: product.id
            }
          })
          setItems(products)

        })
        .catch((err) => console.log(err))
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map(product => {
            return {
              ...product.data(),
              id: product.id
            }
          })
          setItems(products)
        })
        .catch((err) => console.log(err))
    }

  }, [categoryName])

  return (
    <div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer