import { useEffect, useState } from "react";

const useFetchproducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/category/beauty");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  let lipsticks  = products.filter((p) => p.tags.includes("lipstick"));
  let Nail_polish = products.filter((np) => np.tags.includes("nail polish"));
  let ratings = products.filter((r) => r.rating > 1.8);

  useEffect(() => {
    fetchproducts();
  }, []);
  return {
    products,
   lipsticks,
    Nail_polish,
    isLoading,
    error,
    ratings,
  };
};

export { useFetchproducts };
