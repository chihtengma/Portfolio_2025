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
        'inline-flex h-11 items-center gap-2 rounded-xl border border-red-orange-500 px-6 uppercase',
        variant === 'primary' && 'bg-red-orange-500 text-white',
        variant === 'secondary' && '',
        variant === 'text' && 'h-auto border-transparent px-0',
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
