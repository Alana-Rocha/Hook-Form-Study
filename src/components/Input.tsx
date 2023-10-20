import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="text" {...props} />
    </div>
  );
};

export default Input;
