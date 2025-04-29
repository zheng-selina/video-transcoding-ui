import React from "react";
//import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "default",  // Default variant is "default"
}) => {
  // Set base classes for the button
  const baseClasses = "px-4 py-2 rounded text-white transition";

  // Define variant-specific styles
  const variantClasses = variant === "outline" 
    ? "border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600"  // Outline variant with white hover
    : "bg-blue-600 hover:bg-white hover:text-blue-600";  // Default variant with white hover

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`} // Combine base classes and variant classes
    >
      {children}
    </button>
  );
};
