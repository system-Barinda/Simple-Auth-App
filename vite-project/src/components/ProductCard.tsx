import product from "./Product";

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
export default ProductCard;