import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { productsUrl } from "../services/api";
import type { ProductDataType } from "../DataTypes/ProductDataType";

function Dashboard() {
  const [products, setProducts] = useState<ProductDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(productsUrl);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: ProductDataType[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return <ProductList products={products} />;
}

export default Dashboard;
