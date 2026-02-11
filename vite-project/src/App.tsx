import { useState,useEffect } from 'react'
import {productsUrl} from "./services/api"

import type {ProductDataType} from "./DataTypes/ProductDataType"
import './App.css'

function App() {
  const[products,setProducts] = useState<ProductDataType[]>([]);
 
     useEffect(() => {
         fetch(productsUrl).then(res => res.json())
                           .then(data => setProducts(data))
     },[]);
    

  return (
    <>
      {products.map((a) => (
        <div key={a.id}>{a.id}</div>
      ))}
    </>
  )
}

export default App
