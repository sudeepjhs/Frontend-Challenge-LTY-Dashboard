import { Card, CardProps } from "@nextui-org/react";
import React from "react";


const Box: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <Card className={`rounded-md shadow-sm ${className}`} {...rest}>
      {children}
    </Card>
  );
};

export default Box;
