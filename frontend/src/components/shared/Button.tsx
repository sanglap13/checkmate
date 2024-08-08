import React from "react";

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-6 text-2xl bg-[#80b64b] hover:bg-[#9fcf6e] text-white rounded font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
