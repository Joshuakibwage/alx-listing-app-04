// 'use client'
import Image from 'next/image';
import Logo from '@/public/icons/bag.png';
import Button from '@/components/common/Button';
import ManiLogo from '@/public/icons/Vector(1).svg';
import Search from '@/public/icons/Magnifer.svg';
import Profile from '@/public/icons/Vector.png';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';



const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-100">
      <div className="w-full py-3 flex justify-center items-center bg-[#34967c] gap-2 px-4">
        <Image 
          src={Logo}
          alt="Logo"
        />
        <p 
          className="font-semibold text-white text-xs md:text-sm">Overseas trip? Get the latest information on travel guides
        </p>

        <Button 
          label="More Info"
          className="bg-black text-white px-4 py-1 rounded-full text-xs font-semibold"
        />
      </div>

      <nav className="mx-auto py-4 flex items-center justify-between w-[96%]">
        <div className="">
          <Image 
            src={ManiLogo}
            alt="logo"
          />
        </div>
        <form className="border border-gray-200 flex items-center py-2 px-6 rounded-full ">
          <div className="flex flex-col">
            <label className="text-sm">Location</label>
            <input 
              type="text" 
              placeholder="Search destination"
              className="text-xs"
            />
          </div>
          <div className="flex flex-col border-l-2 border-gray-200">
            <label className="text-sm">Check In</label>
            <input 
              type="text" 
              placeholder="Add date"
              className="text-xs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Check Out</label>
            <input 
              type="text" 
              placeholder="Add date"
              className="text-xs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">People</label>
            <input 
              type="text" 
              placeholder="Add guest"
              className="text-xs"
            />
          </div>
          <div>
            <div  className="bg-[#FFA800] p-4 rounded-full">
              <Image 
                src={Search}
                alt="magnifier"
                width={20}
                className="flex-1"
              />
            </div>
          </div>
        </form>
        <div className="flex ">
          <div className="hidden lg:flex gap-4">
            <LoginLink 
              label="Sign In"
              className="bg-[#34967c] px-6 py-2 rounded-full text-white cursor-pointer"
            >
                Login
            </LoginLink>
            <RegisterLink 
              label="Sign Up"
              className="bg-white  border border-gray-200 px-6 py-2 rounded-full text-black cursor-pointer"
            >
                Register
            </RegisterLink>
          </div>
          <div className="block lg:hidden bg-[#34967c]">
            <Image
              src={Profile}
              alt="profile"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
