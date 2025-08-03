import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = ({ itemCount }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = (status) => {
    setSidebarOpen(status);
    document.body.style.overflowY = status ? "hidden" : "auto";
  };

  return (
    <div className="text-primary bg-bg fixed top-0 z-50 min-h-16 w-full shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        {/*Mobile Responsive Menu*/}
        <div
          className="flex flex-1 cursor-pointer sm:hidden"
          onClick={() => handleSidebarToggle(true)}
        >
          <GiHamburgerMenu size={30}></GiHamburgerMenu>
        </div>
        <div
          className={`bg-bg absolute top-0 left-0 z-60 h-screen w-screen transform shadow-xl transition-transform duration-300 ease-in-out sm:hidden ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="absolute top-5 right-3 cursor-pointer"
            onClick={() => handleSidebarToggle(false)}
          >
            <RxCross1 size={25} />
          </div>
          <div className="font-body text-text flex flex-col gap-8 p-10 text-xl underline decoration-2">
            <Link to="/" onClick={() => handleSidebarToggle(false)}>
              Home
            </Link>
            <Link to="/shop" onClick={() => handleSidebarToggle(false)}>
              Shop
            </Link>
            <Link to="/about" onClick={() => handleSidebarToggle(false)}>
              About
            </Link>
          </div>
        </div>

        {/*For Medium+ Screens*/}
        <div className="font-body flex flex-1 gap-5 text-xl max-md:text-lg max-sm:hidden">
          <Link
            to="/"
            className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </div>
        <div className="font-title2 text-primary flex-none text-2xl font-bold sm:text-4xl">
          TrueGoods
        </div>
        <div className="relative flex flex-1 items-center justify-end gap-5">
          <Link
            to="/checkout"
            className="hover:text-primary/80 relative cursor-pointer pt-1 transition-all duration-300 ease-in-out"
          >
            <IoCartOutline size={32} />
            {itemCount > 0 && (
              <span className="bg-primary absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
