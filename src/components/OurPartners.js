import Matic from "../assets/Matic.svg";

export const OurPartners = () => {
  return (
    <div className="mt-8 border bg-gradient-to-br from-background to-backgroundTwo rounded-3xl border-spacing-1 border-backgroundOne ">
      <div>
        <h1 className="mt-4 text-xl font-bold text-center text-transparent md:text-3xl lg:font-black lg:mt-12 lg:pt-4 text-blue ">
          Partners & Sponsors
        </h1>
        <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img priority src={Matic} alt="Hero picture" className="w-32" />
          </div>
        </div>
        <h1 className="flex justify-center pb-4 text-xl font-bold text-pink">
          Polygon Matic
        </h1>
      </div>
    </div>
  );
};
