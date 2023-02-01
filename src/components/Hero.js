import Card from "../assets/Ethereum_Flatline.png";

export default function Hero() {
  return (
    <section className="relative text-4xl font-extrabold my-14 md:my-28 md:grid md:grid-cols-3 md:items-center md:text-5xl">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className=" mt-16 bg-gradient-to-r from-[#26Afe6] via-[#Fe3Dce] to-sky bg-clip-text text-transparent"  >Building the Future of Work in Africa</p>
        {/* <p className="mt-4 text-xl lg:text-6xl" >Complete in A $100k Polaris Testnet Trading Competition.</p> */}
        <div className="mt-16" ><a href="https://discord.gg/7Ah4bSc3jb" className=" text-xl  font-bold  rounded-md bg-white hover:bg-pink transition-all duration-400  transform ease-in-out px-4 py-2 text-background ">
          JOIN NOW
        </a></div>
      </div>
      <div className=" mt-[69px] md:absolute md:right-[-7rem] md:w-96   ">
        <img  src={Card} alt="Hero picture" className="" />
      </div>
    </section>
  );
}
