import { FaCheckCircle, FaTimes } from "react-icons/fa";

function PaymentSuccessToast({ closeToast }) {
  return (
    <div
      style={{ backgroundColor: "var(--color-primary)" }}
      className="flex w-full max-w-screen items-center justify-between gap-4 rounded-lg px-3 py-2 text-white shadow-lg sm:max-w-sm sm:px-4 sm:py-3"
    >
      <div className="flex items-center gap-3">
        <FaCheckCircle size={22} />
        <div>
          <p className="font-semibold">Payment Successful</p>
          <p className="text-sm text-white/90">Your order has been placed.</p>
        </div>
      </div>
      <button onClick={closeToast} className="transition hover:opacity-75">
        <FaTimes size={18} />
      </button>
    </div>
  );
}

export default PaymentSuccessToast;
