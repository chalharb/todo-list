import React from 'react';
import Label from '../label/Label';

interface InputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}


const TextArea: React.FC<InputProps> = ({
  label,
  value,
  onChange
}) => {

  return (
    <>
      <Label labelFor="test">{label}</Label>
      <textarea value={value} onChange={onChange}/>
    </>
  );
};

export default TextArea;
