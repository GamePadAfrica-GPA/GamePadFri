export const ThreeCards = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-16 grid-flow-row ">
        <div className=" gap-16 lg:mt-16 mt-8  bg-gradient-to-b from-[#Bff2Ff] to-[#Ff5Ad9] lg:px-16  px-8 py-12 rounded-lg shadow-lg shadow-sky/20 ">
          {/* text */}
          <div>
            <h1 className=" lg:text-4xl text-2xl lg:font-black font-black bg-gradient-to-r from-blue via-pink to-lightPink bg-clip-text text-transparent ">
              Social Impact
            </h1>
            <div className=" bg-backgroundTwo lg:px-4 lg:py-8 px-2 py-4 w-16 mt-6 lg:w-32 lg:mt-12 rounded-lg  ">
              <div className=" w-8 h-6 border-2  border-gray-100 rounded-lg left-2 top-6"></div>
              <div className=" w-6 h-6 border-4 bg-white border-gray-100 rounded-full left-6 top-4"></div>{" "}
            </div>
          </div>
          {/* paragraph */}
          <div>
            <p className="lg:text-2xl text-xl lg:font-light font-extralight text-white mt-4 ">
              Our organization provides training and job placement services to
              young people, which helps reduce the unemployment rate in
              low-income countries.
            </p>
          </div>
        </div>

        <div className=" gap-16 lg:mt-16 mt-8 bg-gradient-to-b from-[#Bff2Ff] to-[#Ff5Ad9] lg:px-16 lg:py-24 px-8 py-12 rounded-lg shadow-lg shadow-sky/20 ">
          {/* text */}
          <div>
            <h1 className=" lg:text-4xl text-2xl lg:font-black font-black bg-gradient-to-r from-blue via-pink to-lightPink bg-clip-text text-transparent ">
              Economic Impact
            </h1>
            <div className=" bg-backgroundTwo lg:px-4 lg:py-8 px-2 py-4 w-16 mt-6 lg:w-32 lg:mt-12 rounded-lg  ">
              <div className=" w-8 h-6 border-2  border-gray-100 rounded-lg left-2 top-6"></div>
              <div className=" w-6 h-6 border-4 bg-white border-gray-100 rounded-full left-6 top-4"></div>
            </div>
          </div>
          {/* paragraph */}
          <div>
            <p className="lg:text-2xl text-xl lg:font-light font-extralight text-white mt-4 ">
              We're leveling the playing field. While financial exclusion has
              always played a big part in driving the importance of high
              education. We aim to provide an incentive based model approach
              that rewards not only learning but contributing.
            </p>
          </div>
        </div>

        <div className=" gap-16 lg:mt-16 mt-8 bg-gradient-to-b from-[#Bff2Ff] to-[#Ff5Ad9] lg:px-16 lg:py-24 px-8 py-12 rounded-lg shadow-lg shadow-sky/20 ">
          {/* text */}
          <div>
            <h1 className=" lg:text-4xl text-2xl lg:font-black font-black bg-gradient-to-r from-blue via-pink to-lightPink bg-clip-text text-transparent ">
              Environmental Impact
            </h1>
            <div className=" bg-backgroundTwo lg:px-4 lg:py-8 px-2 py-4 w-16 mt-6 lg:w-32 lg:mt-12 rounded-lg  ">
              <div className=" w-8 h-6 border-2  border-gray-100 rounded-lg left-2 top-6"></div>
              <div className=" w-6 h-6 border-4 bg-white border-gray-100 rounded-full left-6 top-4"></div>{" "}
            </div>
          </div>
          {/* paragraph */}
          <div>
            <p className="lg:text-2xl text-xl lg:font-light font-extralight text-white mt-4 ">
              Our organization always delivers on the best quality of work while
              being cost-effective in every process that is implemented to close
              the unemployment gap and empower others.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
