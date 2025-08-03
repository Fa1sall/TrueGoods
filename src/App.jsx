import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";

import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (newItem) => {
    const quantity = 1;
    const cartItemIds = new Set(cartItems.map((item) => item.id));
    if (!cartItemIds.has(newItem.id)) {
      setCartItems((prev) => [...prev, { ...newItem, quantity }]);
      toast.success("Item added to cart!", {
        autoClose: 1000,
        toastClassName: "text-white font-medium rounded shadow px-4 py-2",
        style: {
          backgroundColor: "var(--color-primary)",
        },
      });
      console.log("Added ", newItem);
    } else {
      toast.error("Item already in cart!", {
        autoClose: 1000,
        toastClassName: "text-white font-medium rounded shadow px-4 py-2",
        style: {
          backgroundColor: "var(--color-toast-error)",
        },
      });
    }
  };

  const handleRemoveFromCart = (newItemId) => {
    const removedItemCart = cartItems.filter((item) => item.id !== newItemId);
    setCartItems(removedItemCart);
    console.log("Removed: ", newItemId);
  };

  const handleQuantityChange = (itemId, value) => {
    const newCart = cartItems.map((item) => {
      return item.id === itemId ? { ...item, quantity: value } : item;
    });
    setCartItems(newCart);
  };

  return (
    <div className="bg-bg relative min-h-screen w-screen overflow-x-hidden scroll-smooth">
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        theme=""
        transition={Slide}
        pauseOnFocusLoss={false}
        closeButton={false}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        <Navbar itemCount={cartItems.length} />
        <div className="pt-20">
          <Outlet
            context={{
              cartItems,
              handleAddToCart,
              handleRemoveFromCart,
              handleQuantityChange,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
