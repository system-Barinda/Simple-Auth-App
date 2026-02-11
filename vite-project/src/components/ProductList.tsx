import { useEffect,useState } from "react";

import  { productsUrl } from "../services/api"

import type  { ProductDataType }  from "../DataTypes/ProductDataType";

import ProductCard from "./ProductCard";

function ProductList(){
    const[products,setProducts] = useState<ProductDataType[]>([]);

    useEffect(() => {
        fetch(productsUrl).then(res => res.json())
                          .then(data => setProducts(data))
    },[]);
    console.log(products);
    return(
        <>
        </>
    )
}
export default ProductList