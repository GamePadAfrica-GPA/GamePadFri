import { BiUser } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { TiTickOutline } from "react-icons/ti";
import { HiOutlinePencil } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import { useSpring, animated } from '@react-spring/web'
export default function Content () {

  const customer = useSpring({ customers: 1512245, from: { customers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });

  return (
    <div className=" md:flex md:flex-row ">
      <div className=" flex flex-col items-center ml-[70px] mr-[54px] text-bold shadow-2xl shadow-white/25 rounded-3xl bg-lightPink/40 bg-gradient-to-tl from-sky/80 to-transparent md:w-[20%] ">
        <div className=" mt-16 flex items-start gap-8 ">
          <BiUser size={"22px"} className=" mt-3 " />
          <div className=" text-2xl ">
          <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className=" text-xs font-semibold mb-9 md:text-base ">Community</p>
          </div>
        </div>
        <div className=" flex items-start mb-16 gap-8 ">
          <ImStack size={"22px"} className="mt-3" />
          <div className=" text-2xl ">
          <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className=" text-xs font-semibold mb-9 md:text-base ">Collateral</p>
          </div>
        </div>
      </div>
      <div className=" text-xs flex flex-col w-full mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-base md:ml-5 ">
        <div className="content-icons ">
          <div className=" rounded-full border border-b-4 ">
            <TiTickOutline size={"28px"} />
          </div>
          Use POL as the base collateral asset
        </div>
        <div className="content-icons ">
          <div className=" rounded-full border border-b-4 ">
            <HiOutlinePencil size={"28px"} />
          </div>
          Use POL as the base collateral asset
        </div>
        <div className="content-icons ">
          <div className=" rounded-full border border-b-4 ">
            <VscTools size={"28px"} />
          </div>
          Use POL as the base collateral asset
        </div>
      </div>
    </div>
  );
};


