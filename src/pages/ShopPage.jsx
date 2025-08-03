import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import SearchBar from "../components/Searchbar";
import getProducts from "../api/getProducts";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleAddToCart } = useOutletContext();

  const handleSearch = (text) => {
    const filteredData = allProductsData.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase()),
    );
    setProductsData(filteredData);
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((data) => {
      setAllProductsData(data);
      setProductsData(data);
      setIsLoading(false);
    });
    return () => getProducts().then(console.log);
  }, []);

  return (
    <section className="flex min-h-[85vh] justify-center px-4 pt-10 pb-10">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="mx-auto max-w-lg">
          <div className="font-title text-primary pb-4 text-center text-3xl font-bold sm:text-4xl">
            Explore Products
          </div>
          <SearchBar handleSearch={handleSearch} />
        </div>
        {isLoading ? (
          <div className="flex w-full items-center justify-center gap-4 text-xl sm:text-2xl">
            <div className="text-black">Loading Products</div>
            <ClipLoader size={35} speedMultiplier={1.1} />
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {productsData.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopPage;
