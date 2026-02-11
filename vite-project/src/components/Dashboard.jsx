import { useEffect, useState } from "react";
import  productsUrl from "../services/api"

export interface ProductDataType{
    id:number;
    title:string;
    price:number;
    description:string;
    image:string;
    category:string;
}



function Product(){
 const [products,setProducts] = useState<ProductDataType[]>([]);
 useEffect(() => {

 },[]);

return();
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
        <h1>barinda system sylvere</h1>
    )
}
export default Dashboard;