import { FaGithub } from "react-icons/fa";
import shoppingImg from "../assets/images/shopping-bag.jpg";

const AboutPage = () => {
  return (
    <div className="text-text min-h-screen px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-title2 text-primary text-4xl font-bold sm:text-5xl">
            About Us
          </h1>

          <p className="mt-6 text-lg leading-relaxed sm:text-xl">
            Welcome to True Goods! A space where simplicity meets purpose. We're
            committed to offering everyday essentials through a shopping
            experience that's fast, clean, and distraction-free.
          </p>

          <p className="mt-4 text-lg leading-relaxed sm:text-xl">
            From curated product selections to a seamless checkout, everything
            here is designed to help you shop smarter. We value clarity, speed,
            and ease - so you can focus on what matters.
          </p>

          <p className="mt-4 text-lg leading-relaxed sm:text-xl">
            At True Goods, it's not about more - it's about{" "}
            <span className="text-primary font-bold">Better</span>.
          </p>

          <div className="border-border text-muted-foreground mt-10 border-t pt-6 text-sm">
            <p className="mb-2">
              <span className="text-text font-medium">Note:</span> This website
              was built for learning React & React Router. The products and
              listings are not real.
            </p>

            <a
              href="https://github.com/Fa1sall/TrueGoods"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-2 hover:underline"
            >
              <span>View on GitHub</span>
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <img
            src={shoppingImg}
            alt="Shopping bag illustration"
            className="w-full max-w-[220px] rounded-2xl shadow-lg sm:max-w-[250px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
