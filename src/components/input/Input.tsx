import React from 'react';
import Label from '../label/Label';

interface InputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange
}) => {

  return (
    <>
      <Label labelFor="test">{label}</Label>
      <input type="text" value={value} onChange={onChange}/>
    </>
  );
};

export default Input;
