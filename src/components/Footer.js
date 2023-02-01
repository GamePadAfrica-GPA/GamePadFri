import {CiTwitter} from 'react-icons/ci'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      <div className="lg:w-1/3">
        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
          <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
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
          <span className="self-center text-2xl font-semibold">Game Pad Africa</span>
        </a>
      </div>
      <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-50">Services</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">Features</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Integrations</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Blog</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Web3 Jobs</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Web3 Advertisement</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">GPA DAO</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">Privacy</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="uppercase dark:text-gray-50">Developers</h3>
          <ul className="space-y-1">
            <li>
              <a rel="noopener noreferrer" href="#">Public API</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Documentation</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">Guides</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="uppercase dark:text-gray-50">Social media</div>
          <div className="flex justify-start space-x-3">
            <a rel="noopener noreferrer" href="https://twitter.com/gamepadafrica " title="Facebook" className="flex items-center p-1">
             <CiTwitter size={24} />
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/game-pad-africa/ " title="Twitter" className="flex items-center p-1">
              <FiLinkedin  size={24} />
            </a>
            <a rel="noopener noreferrer" href="https://www.instagram.com/gamepadafrica/ " title="Instagram" className="flex items-center p-1">
            <FiInstagram  size={24}/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 text-sm text-center dark:text-gray-400">© 2023 Game Pad Africa. All rights reserved.</div>
  </footer>
  )
}
