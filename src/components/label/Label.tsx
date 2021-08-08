import React from 'react';

interface Labelprops {
  labelFor: string;
  children?: React.ReactNode;
}


const Label: React.FC<Labelprops> = ({
  labelFor,
  children,
}) => {
  return (
    <label htmlFor={labelFor}>{children}</label>
  );
};

export default Label;
