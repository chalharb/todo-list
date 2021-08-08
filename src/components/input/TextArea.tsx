import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}


const TextArea: React.FC<InputProps> = ({
  value,
  onChange
}) => {

  return (
    <textarea value={value} onChange={onChange}/>
  );
};

export default TextArea;
