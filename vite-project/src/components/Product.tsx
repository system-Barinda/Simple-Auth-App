import { useEffect, useState } from "react";
import  { productsUrl } from "../services/api"
import type  { ProductDataType }  from "../DataTypes/ProductDataType";

function Product(){
 const [products,setProducts] = useState<ProductDataType[]>([]);
 const [error,setError] = useState<string | null>(null);
 const [loading,setLoading] = useState<boolean>(false);

 useEffect( () => {
    const fetchProduct = async() => {
    try{
   setLoading(true)
   setError(null)

   let data = await fetch(`${productsUrl}`);
   if(!data.ok) throw new Error('network connection failed');
   let corrected: ProductDataType[] = await data.json();
   setProducts(corrected);
 
  }
  catch(err){
   setError(err instanceof Error ? err.message : "Ooops! Something went wrong" )
  }
  finally{
    setLoading(false);
  }
};
 
fetchProduct();
 },[]);
products.forEach(a => console.log(a.id));
return(
    <div>
        {loading && <p>loading..............</p>}
        {error && <p className="text-red-500">{error}</p>}

        {products.map(product => (
            <div key={product.id}>{product.title}</div>
        ))}
    </div>
)
}
export default Product;