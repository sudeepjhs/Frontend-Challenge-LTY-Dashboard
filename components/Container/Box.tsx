import React, { HTMLAttributes, ReactNode } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`rounded-md shadow-sm ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
