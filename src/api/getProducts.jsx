const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const products = await data.products.map((product) => ({
      id: product.id,
      name: product.title,
      desc: product.description,
      price: product.price,
      image: product.thumbnail,
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Unable to load products. Please try again later.");
  }
};

export default getProducts;
