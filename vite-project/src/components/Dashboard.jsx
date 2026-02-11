function ProductCard({product}){
    return(
     <div className="border p-3 rounded">
        <img src={product.image} 
        alt={product.title}
        className="h-40 w-full object-contain"
         />
     </div>
    );
}

function Dashboard(){
    return(
        <h1>barinda system sylvere</h1>
    )
}
export default Dashboard;