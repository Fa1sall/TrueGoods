import { Link } from "react-router-dom";
import error404 from "../assets/images/error404.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div
      className="bg-bg flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-center"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
        backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
      }}
    >
      <div className="font-body text-text text-center text-2xl font-bold">
        Oops! the page were looking for doesn't exist
      </div>
      <div>
        <img
          src={error404}
          alt="Page not found Error"
          className="size-[400px]"
        />
      </div>
      <div className="">
        <Link
          to="/"
          className="bg-primary hover:text-primary flex items-center gap-1 rounded border-2 border-amber-100 p-3 font-bold text-amber-100 transition-all duration-300 ease-in-out hover:border-black hover:bg-amber-100"
        >
          Back to Home Page <FaArrowAltCircleRight />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
