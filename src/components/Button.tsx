import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const Button = (
  props: {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    // twMerge is used to merge the className with the default styles, it allows for the use of the className prop to override the default styles
    <button
      className={twMerge(
        // Used transition-colors instead of transition-all since we only need to transition the color, this is more efficient
        'inline-flex h-11 items-center gap-2 rounded-xl border border-red-orange-500 px-6 uppercase transition-colors duration-500 relative group/button',
        variant === 'primary' && 'bg-red-orange-500 text-white',
        variant === 'secondary' && 'hover:bg-red-orange-500 hover:text-white',
        // Used after to create a pesudo-element that create an animation line on hover from left to right
        variant === 'text' && "h-auto border-transparent px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {/* iconAfter is used to display an icon after the button text */}
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
