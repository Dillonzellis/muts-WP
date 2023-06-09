import React from "react";

interface ChildrenProp {
  children?: React.ReactNode;
}

const Container = ({ children }: ChildrenProp) => {
  return (
    <div className="container mx-auto max-w-[1180px] px-6">{children}</div>
  );
};

export default Container;
