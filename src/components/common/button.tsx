import React from 'react';
interface ButtonProps {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string; 
  disabled?: boolean;
  name: string; 
  img?: string; 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const baseClasses =
    'w-full flex gap-1 justify-center items-center rounded-lg px-4 py-2 text-base font-medium transition-colors focus:outline-none';
  const enabledClasses = 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer';
  const disabledClasses = 'bg-blue-400 text-gray-200 cursor-not-allowed';

  return (
    <button
      ref={ref}
      onClick={props.handleClick}
      disabled={props.disabled}
      style={props.bgColor ? { backgroundColor: props.bgColor } : undefined}
      className={`${baseClasses} ${props.disabled ? disabledClasses : enabledClasses}`}
    >
      {props.img && <img src={props.img} alt={props.name} className="w-5 h-5" />}
      {props.name}
    </button>
  );
});

export default Button;
