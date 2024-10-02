import React from "react";

type ContentType = string;

const Button: React.FC<{
  content: ContentType;
  className?: string;
  href?: string;
}> = ({ content, className }) => {
  const buttonClassName = ` capitalize active:opacity-90 shadow-lg hover:bg-[#363636] bg-[#2D2D2D] text-white rounded-3xl md:px-12 md:py-2 md:py-3 px-8 py-2 text-base flex justify-center items-center w-fit  ${className}`;
  return <button className={buttonClassName}>{content}</button>;
};

export default Button;
