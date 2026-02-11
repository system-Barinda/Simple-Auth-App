import ProductCard from "./ProductCard";
import type { ProductDataType } from "../DataTypes/ProductDataType";

type ProductListProps = {
  products: ProductDataType[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;
