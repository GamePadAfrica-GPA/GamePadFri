// import {GiStairsGoal} from 'react-icons/gi'
// import {GiStairsGoal} from 'react-icons/gi'


export const BaseConcept = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:mt-16 mt-8 bg-gradient-to-br from-backgroundOne to-backgroundTwo lg:px-16 lg:py-24 px-8 py-12 rounded-lg shadow-md ">
        {/* text */}
        <div>
          <h1 className=" lg:text-4xl text-2xl lg:font-black font-black bg-gradient-to-r from-white via-lightPink to-sky bg-clip-text text-transparent ">
            Our Goals
          </h1>
          <div className=" bg-backgroundTwo lg:px-4 lg:py-8 px-2 py-4 w-16 mt-6 lg:w-32 lg:mt-12 rounded-lg  ">
            <div className=" w-6 h-6 border-4 bg-white border-gray-100 rounded-full left-6 top-4"></div>
          </div>
        </div>
        {/* paragraph */}
        <div>
          <p className="lg:text-2xl text-xl lg:font-light font-extralight text-white  ">
            Game Pad Africa is on a mission to help African youth participate in
            the creator digital economy using web 3.0 technologies. We believe
            that young people have the creativity and energy to change their
            communities for the better,{" "}
            <p className="lg:text-2xl text-xl lg:font-light font-extralight bg-gradient-to-r from-white via-lightPink to-sky bg-clip-text text-transparent">
              and we're committed to providing them with the tools they need to
              succeed.
            </p>{" "}
            With our innovative programs and products, we're working to empower
            a new generation of African entrepreneurs and creators. Join us as
            we build a brighter future for Africa!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:mt-16 mt-8 bg-gradient-to-br from-backgroundOne to-backgroundTwo lg:px-16 lg:py-24 px-8 py-12 rounded-lg shadow-md ">
        {/* text */}
        <div>
          <h1 className=" lg:text-4xl text-2xl lg:font-black font-black bg-gradient-to-r from-white via-lightPink to-sky bg-clip-text text-transparent ">
            Our Approach
          </h1>
          <div className=" bg-backgroundTwo lg:px-4 lg:py-8 px-2 py-4 w-16 mt-6 lg:w-32 lg:mt-12 rounded-lg  ">
            <div className=" w-6 h-6 border-4 bg-white border-gray-100 rounded-full left-6 top-4"></div>
          </div>
        </div>
        {/* paragraph */}
        <div>
          <p className="lg:text-2xl text-xl lg:font-light font-extralight text-white  ">
            We're leveling the playing field by making Blockchain Accessible,
            simple and easy to use.
            <p className="lg:text-2xl text-xl lg:font-light font-extralight bg-gradient-to-r from-white via-lightPink to-sky bg-clip-text text-transparent">
              We plan on running training and development program that target
              soft and technical skills across any environment with specific
              internet in Blockchain,
            </p>
            AI and Machine Learning.
          </p>
        </div>
      </div>
    </>
  );
};
