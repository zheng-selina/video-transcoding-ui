import React from "react";
//import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // className={classNames(
      //   "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
      //   className
      // )}
    >
      {children}
    </button>
  );
};
