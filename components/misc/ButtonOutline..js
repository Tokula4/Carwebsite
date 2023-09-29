import React from 'react';

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#232E89] text-[#232E89] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#232E89] hover:text-white-500 transition-all hover:shadow-[#232E89] ">
      {' '}
      {children}
    </button>
  );
};

export default ButtonOutline;
