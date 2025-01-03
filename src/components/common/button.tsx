import React from 'react';

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      onClick={props.handleClick}
      style={{ backgroundColor: props.bgColor }}
      disabled={props.disabled}
      className={`w-full flex gap-1 justify-center items-center rounded-lg px-4 py-2 text-base font-medium 
        ${props.disabled ? 'bg-[#2563eb5c] cursor-default' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'}
        transition-colors focus:outline focus:outline-4 focus:outline-webkit-focus-ring`}
    >
      {props.img && <img src={props.img} alt={props.name} />}
      {props.name}
    </button>
  );
});

export default Button;