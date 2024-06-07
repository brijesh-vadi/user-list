import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4 mx-40"
        {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
