import { useEffect, useState } from "react";
import  productsUrl from "../services/api"

function Product(){
 const [products,setProducts] = useState<ProductDataType[]>([]);
 const [error,setError] = useState<string | null>(null);
 const [loading,setLoading] = useState<boolean>(false);

 const fetchProduct = async() => {

 }
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



function ProductCard({product}){
    return(
     <div className="border p-3 rounded">
        <img src={product.image} 
        alt={product.title}
        className="h-40 w-full object-contain"
         />

         <h3 className="text-sm font-semibold mt-2">
            {product.title}
         </h3>
         <p className="text-green-600 font-bold">
            {product.price}
         </p>
     </div>
    );
}

function Dashboard(){
   
    return(
        <Product />
    )
}
export default Dashboard;