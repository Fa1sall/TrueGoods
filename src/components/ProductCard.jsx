import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price, handleAddToCart }) => {
  return (
    <div className="flex justify-center">
      <div
        className="text-text bg-accent/20 font-body border-primary flex h-full w-full flex-col items-center justify-between gap-5 rounded-xl border-2 p-4 text-center"
        style={{
          backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
        }}
      >
        <Link
          to={`/shop/product/${id}`}
          className="flex w-full flex-col items-center gap-3"
        >
          <img src={image} alt={`${name} image`} className="size-[200px]" />
          <div className="text-lg font-semibold">{name}</div>
        </Link>
        <div className="flex w-full items-center justify-between font-bold">
          <div className="text-xl">${price}</div>
          <button
            onClick={() => handleAddToCart({ id, name, image, price })}
            className="bg-primary hover:bg-secondary/80 hover:border-primary cursor-pointer rounded-3xl border-2 border-teal-950 p-2 text-white transition-all duration-300 ease-in-out hover:text-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
