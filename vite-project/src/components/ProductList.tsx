import ProductCard from "./ProductCard";
import { ProductDataType } from "../DataTypes/ProductData.type";

type ProductListProps = {
  products: ProductDataType[];
};

function ProductList({ products }: Readonly<ProductListProps>) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
