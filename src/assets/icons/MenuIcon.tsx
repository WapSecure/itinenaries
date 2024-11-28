import React from 'react';

interface MenuIconProps {
  className?: string; 
}

const MenuIcon: React.FC<MenuIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 text-gray-600 ${className}`}  // Add the className here
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default MenuIcon;
