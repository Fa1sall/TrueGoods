import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

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
        className="flex h-24 w-24 shrink-0 overflow-hidden rounded-md max-sm:h-20 max-sm:w-20"
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
          className="font-body text-foreground truncate text-lg font-semibold max-sm:text-base"
        >
          {props.name}
        </Link>

        <div className="flex items-center gap-2 max-sm:gap-1 max-sm:text-sm">
          <button
            onClick={() =>
              props.handleQuantityChange(
                props.id,
                props.quantity <= 1 ? props.quantity : props.quantity - 1,
              )
            }
            className="cursor-pointer"
          >
            <IoIosRemoveCircle size={24} className="max-sm:size-6" />
          </button>

          <input
            type="number"
            min={1}
            step={1}
            value={props.quantity || ""}
            onChange={(e) =>
              props.handleQuantityChange(
                props.id,
                e.target.value === "" ? 0 : parseInt(e.target.value),
              )
            }
            onBlur={(e) => {
              if (!e.target.value || parseInt(e.target.value) < 1) {
                props.handleQuantityChange(props.id, 1);
              }
            }}
            className="border-border text-foreground focus:ring-primary w-16 rounded border bg-gray-50 px-2 py-1 text-center text-sm outline-none focus:ring-2 max-sm:w-12 max-sm:px-1"
          />

          <button
            onClick={() =>
              props.handleQuantityChange(props.id, props.quantity + 1)
            }
            className="cursor-pointer"
          >
            <IoIosAddCircle size={24} className="max-sm:size-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between gap-2 max-sm:gap-1 max-sm:text-sm">
        <div className="text-md font-bold text-black max-sm:text-base">
          ${parseFloat(props.itemPrice).toFixed(2)}
        </div>

        <button
          onClick={() => props.handleRemoveFromCart(props.id)}
          className="flex cursor-pointer items-center gap-1 rounded bg-red-800 p-2 text-sm font-medium text-white transition hover:opacity-85"
          aria-label="Remove Button"
        >
          <div className="max-sm:hidden">Remove</div>
          <FaRegTrashAlt className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default OrderProductCard;
