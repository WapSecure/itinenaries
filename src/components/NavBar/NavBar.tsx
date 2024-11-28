import React, { useState } from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import ChartPieSliceIcon from "../../assets/icons/ChartPieSliceIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import ListChecksIcon from "../../assets/icons/ListChecksIcon";
import HandCoinsIcon from "../../assets/icons/HandCoinsIcon";
import BellIcon from "../../assets/icons/BellIcon";
import BasketIcon from "../../assets/icons/BasketIcon";
import PlusSquareIcon from "../../assets/icons/PlusSquareIcon";
import UserIcon from "../../assets/icons/UserIcon";
import CaretDownIcon from "../../assets/icons/CaretDownIcon";
import MenuIcon from "../../assets/icons/MenuIcon";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Left section with Logo and Search */}
      <div className="flex items-center space-x-4">
        <LogoIcon className="h-8 w-8" />

        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-500">
            <SearchIcon className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 border h-14 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Right section with Menu Items and Hamburger Icon */}
      <div className="flex items-center">
        {/* Hamburger icon visible only on mobile/tablet */}
        <button className="lg:hidden flex items-center" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md lg:static lg:flex lg:flex-row lg:items-center lg:space-x-6 lg:w-auto`}
        >
          {/* First row of menu items */}
          <div className="flex flex-col lg:flex-row items-center justify-center text-gray-600 space-y-4">
            {/* Hide Home item on mobile and tablet, show on lg and up */}
            <div className="hidden lg:block">
              <button
                className="flex flex-col items-center space-y-1 mx-3 hover:text-blue-600"
                onClick={undefined}
              >
                <HomeIcon />
                <span className="text-xs">Home</span>
              </button>
            </div>

            {[
              { icon: <ChartPieSliceIcon />, label: "Dashboard" },
              { icon: <WalletIcon />, label: "Wallet" },
              { icon: <ListChecksIcon />, label: "Plan a Trip" },
              { icon: <HandCoinsIcon />, label: "Commission for Life" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center space-y-1 mx-3 hover:text-blue-600"
                onClick={undefined}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Second row of menu items and Subscribe button */}
          <div className="flex flex-col lg:flex-row items-center justify-center text-gray-600 space-y-4">
            {/* Remove the border for mobile/tablet */}
            <div className="hidden lg:block border-r h-14 border-gray-300 mx-4" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Subscribe
            </button>
            {[
              { icon: <BellIcon />, label: "Notification" },
              { icon: <BasketIcon />, label: "Cart" },
              { icon: <PlusSquareIcon />, label: "Create" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center space-y-1 mx-3 hover:text-blue-500"
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Remove the User Profile for mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-2 ml-4">
            <UserIcon />
            <CaretDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
