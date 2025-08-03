import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const OrderProductCard = (props) => {
  return (
    <div
      className="border-border flex w-full max-w-lg items-center justify-between gap-4 rounded-lg border bg-yellow-100/55 p-4 shadow-sm max-sm:gap-2 max-sm:px-2"
      style={{
        backgroundImage: `
  repeating-linear-gradient(90deg, rgba(31, 41, 55, 0.05) 0px, rgba(31, 41, 55, 0.05) 2px, transparent 2px, transparent 6px)
`,
      }}
    >
      <Link
        to={`/shop/product/${props.id}`}
        className="flex h-24 w-24 shrink-0 overflow-hidden rounded-md"
      >
        <img
          src={props.image}
          alt="Product Image"
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
        <Link
          to={`/shop/product/${props.id}`}
          className="font-body text-foreground truncate text-lg font-semibold"
        >
          {props.name}
        </Link>
        <div>
          <input
            type="number"
            min={1}
            step={1}
            value={props.quantity}
            onChange={(e) =>
              props.handleQuantityChange(
                props.id,
                parseInt(e.target.value) || 1,
              )
            }
            className="border-border text-foreground focus:ring-primary w-16 rounded border bg-gray-50 px-2 py-1 text-center text-sm outline-none focus:ring-2"
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-between gap-2">
        <div className="text-md font-bold text-black">${props.price}</div>
        <button
          onClick={() => props.handleRemoveFromCart(props.id)}
          className="flex cursor-pointer items-center gap-1 rounded bg-red-800 p-2 text-sm font-medium text-white transition hover:opacity-85"
          aria-label="Remove Button"
        >
          <div className="max-sm:hidden">Remove</div>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default OrderProductCard;
