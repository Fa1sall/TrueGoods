import { Link } from "react-router-dom";
import shopcart from "../assets/images/shoppingcart.png";

const HomePage = () => {
  return (
    <section className="flex min-h-[85vh] items-center justify-between px-5">
      <div className="font-body mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-10 sm:flex-row sm:gap-0">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col text-4xl md:text-5xl lg:text-7xl">
            <span className="">Goods</span>
            <span className="pl-15">You Can</span>
            <div className="font-title2 pl-30">Trust</div>
          </div>
          <div className="flex items-center justify-center sm:justify-end">
            <Link
              to="/shop"
              className="bg-primary border-accent hover:border-primary hover:bg-accent rounded-xl border-1 p-3 text-xl font-bold text-white transition-all duration-200 ease-in-out hover:text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={shopcart}
            alt="Shopping Stock Image"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
