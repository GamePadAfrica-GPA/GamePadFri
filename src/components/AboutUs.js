import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-background to-backgroundTwo  my-14 rounded-3xl border-spacing-1 border border-backgroundOne ">
      <div className="flex justify-center text-center ">
        <h2 className="lg:text-6xl my-4 text-center font-bold tracking-tight text-blue ">
          About Us
        </h2>
      </div>

      <div className="flex justify-center text-center ">
        <h3 className=" lg:text-2xl text-xl my-8 text-bwhitelue">
          Blockchain technology is poised to upend the traditional workforce.
          With its decentralized ledger system, blockchain provides a secure and
          transparent way for businesses to conduct transactions without the
          need for a central authority. This could create new opportunities for
          remote workers, who will be able to contribute to projects from
          anywhere in the world. Additionally, blockchain-based businesses are
          likely to be more resilient to economic downturns, as they will not be
          reliant on a single location or market. As the business landscape
          continues to evolve, blockchain is likely to play an increasingly
          important role in the future of work.
        </h3>
      </div>
    </div>
  );
};

export default AboutUs;
