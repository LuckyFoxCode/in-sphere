import React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/libs/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }: InputProps, ref) => {
    const input = tv({
      base: 'w-full rounded-lg border px-2 py-1 outline-none animate ',
      variants: {
        colors: {
          primary: 'border-gray-500  focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500',
          invalid: 'border-rose-500  focus-visible:border-rose-500 focus-visible:ring-1 focus-visible:ring-rose-500',
          valid:
            'border-gray-500 focus-visible:border-green-500 focus-visible:ring-1 focus-visible:ring-green-500 shadow-md shadow-green-500',
        },
      },
    });

    return (
      <input
        ref={ref}
        {...props}
        className={cn(input({ colors: error ? 'invalid' : 'valid' }), className)}
      />
    );
  },
);
