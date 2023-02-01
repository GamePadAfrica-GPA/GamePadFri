import  { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

export default function NavBar(props) {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className=" flex items-center ">
      <div className=" flex items-center  ">
        <div className="px-4  ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
              fill="white"
            />
            <path
              d="M26.9983 12L26.8892 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
              fill="white"
            />
            <path d="M26.9984 " fill="white" />
            <path
              d="M26.9986 24.9492V28.7851L26.9986 28.9648L32.0001 21.9211L26.9986 24.8742Z"
              fill="white"
            />
            <path
              d="M26.99846776767 28.9648V24.8742L21.999990090909090909 28.9648V24.8742L21.999990090909090909"
              fill="white"
            />
            <path
              d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
              fill="white"
            />
            <path
              d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-lg md:text-2xl font-bold ml-2  ">GamePadAfrica</div>
      
      </div>
      <ul className=" md:flex md:gap-10 ml-auto  text-2xl font-semibold   ">
        {openMenu && isMobile ? (
          <TfiClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenuAlt3
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            {/* <li className="nav-links">About Us</li>
            <li className="nav-links">Services</li>
            <li className="nav-links">Stats</li> */}
            <li className="nav-links ml-[100px] border rounded-md px-8 py-2 hover:bg-white hover:text-lightPink transition-all ease-in-out duration-200 ">Past Events</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-backgroundOne animate-wobble  transition-all duration-500 ease-in-out z-10 p-8 text-center text-sm ">
            {/* <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Stats</li>
            <li className="cursor-pointer">DAO</li> */}
          </div>
        )}
      </ul>
    </nav>
  );
}
