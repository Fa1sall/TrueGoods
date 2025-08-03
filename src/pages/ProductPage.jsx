import { useParams, Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaArrowLeft,
  FaCartPlus,
  FaWarehouse,
  FaPercent,
  FaTags,
  FaUserCircle,
} from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useOutletContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ClipLoader size={50} className="text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-8 text-xl font-bold text-red-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="font-body bg-bg min-h-screen p-4 text-gray-800">
      {/* Back to shop navigation*/}
      <Link
        to="/shop"
        className="text-primary mb-6 inline-flex items-center gap-2 hover:underline"
      >
        <FaArrowLeft />
        Back to Shop
      </Link>

      <div
        className="bg-accent/10 border-border flex flex-col gap-10 rounded-xl border p-6 shadow-xl md:flex-row"
        style={{
          backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
        }}
      >
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-sm rounded-2xl object-cover"
        />

        {/* Product Details */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          <div className="mt-2 flex gap-4 text-sm text-gray-700">
            <span>
              <span className="font-semibold text-gray-800">Brand:</span>{" "}
              {product.brand}
            </span>
            <span>
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {product.category}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="text-primary flex items-center gap-2 text-xl font-bold">
              <FaTags /> ${product.price}
            </div>
            <div className="flex items-center gap-2 font-semibold text-pink-600">
              <FaPercent /> {product.discountPercentage}% OFF
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <FaWarehouse /> Stock: {product.stock}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 text-yellow-500">
            {Array(Math.round(product.rating))
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            <span className="ml-2 text-sm text-gray-700">
              ({product.rating}/5)
            </span>
          </div>

          <button
            onClick={() =>
              handleAddToCart({
                id: product.id,
                name: product.title,
                image: product.thumbnail,
                price: product.price,
              })
            }
            className="bg-primary mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-2 text-white transition-all hover:opacity-90"
          >
            <FaCartPlus />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-primary mb-4 text-2xl font-semibold">Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review, i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
                }}
                className="bg-secondary/20 border-border rounded-xl border p-5 shadow-md transition-transform hover:scale-[1.01]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                  <span className="text-text-muted text-xs font-bold">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>

                <p className="mb-3 text-gray-700 italic">“{review.comment}”</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaUserCircle className="text-primary text-xl" />
                  <span className="font-medium">{review.reviewerName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
