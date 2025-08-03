import { useOutletContext, Link } from "react-router-dom";
import OrderProductCard from "../components/OrderProductCard";
import { IoCartOutline } from "react-icons/io5";
import { FaReceipt } from "react-icons/fa";
import PaymentSuccessToast from "../components/PaymentSuccessToast";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { cartItems, handleRemoveFromCart, handleQuantityChange } =
    useOutletContext();
  const cartTotal = cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0,
  );
  const tax = parseFloat(cartTotal * (5 / 100));
  const shippingCharge = 5.0;
  const totalCharge = parseFloat(cartTotal + tax + shippingCharge).toFixed(2);

  const handleCheckout = () => {
    const toastId = "payment-success";

    if (!toast.isActive(toastId)) {
      toast(<PaymentSuccessToast />, {
        toastId,
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
        hideProgressBar: true,
        className: "!p-0 !bg-transparent !shadow-none",
        bodyClassName: "!p-0",
      });
    }
  };

  return (
    <section className="text-foreground flex min-h-[90vh] w-full min-w-screen justify-center py-4">
      {cartItems.length < 1 ? (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4 text-center">
          <div className="text-3xl">Your Cart is Empty !</div>
          <Link
            to="/shop"
            className="bg-primary border-accent hover:border-primary hover:bg-accent rounded-xl border-1 p-3 text-xl font-bold text-white transition-all duration-200 ease-in-out hover:text-black"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 md:grid-cols-2">
          {/*Cart Card*/}
          <div className="space-y-6 shadow-md">
            <div className="border-border space-y-4 rounded-md border bg-white p-3 sm:p-6">
              <div className="font-body mb-4 flex items-center gap-2 text-2xl font-semibold text-gray-800">
                <IoCartOutline className="text-indigo-900" size={35} />
                <div className="text-black">Your Cart</div>
              </div>
              <div className="flex max-h-[60vh] flex-col gap-4 overflow-y-auto pr-1">
                {cartItems.map((item) => {
                  return (
                    <OrderProductCard
                      key={item.id}
                      {...item}
                      handleRemoveFromCart={handleRemoveFromCart}
                      handleQuantityChange={handleQuantityChange}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/*Order Summary Card*/}
          <div className="border-border rounded-md border bg-white p-6 shadow-md">
            <div className="font-body mb-4 flex items-center gap-2 text-2xl font-semibold text-gray-800">
              <FaReceipt className="text-emerald-800" />
              <span>Order Summary</span>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums">
                  ${parseFloat(cartTotal).toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Taxes (5%)</span>
                <span className="tabular-nums">${tax.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="tabular-nums">${shippingCharge}</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-300 pt-3 text-base font-semibold text-gray-900">
                <span>Total</span>
                <span className="text-green-700">${totalCharge}</span>
              </div>
            </div>

            <button
              onClick={() => handleCheckout()}
              className="mt-6 w-full rounded bg-emerald-800 px-4 py-2 font-medium text-white transition hover:bg-emerald-700"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckoutPage;
