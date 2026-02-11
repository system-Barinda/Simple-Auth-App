import ProductCard from "./ProductCard";
import type { ProductDataType } from "../DataTypes/ProductDataType";

type DashboardProps = {
  products: ProductDataType[];
};

function Dashboard({ products }: DashboardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Dashboard;
