import React, { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [product, setProduct]=useState({})

  const {id} = useParams()
  
  useEffect(()=>{
    const productSelected = products.find( producto => producto.id === parseInt(id))
    setProduct(productSelected)

  }, [id])
  
    return (

        <div >
            <p className="title" >{product.name} </p>
            <p className="price">${product.price} </p>
            <p className="description">{product.description} </p>
        </div>
  )
}

export default ItemDetailContainer