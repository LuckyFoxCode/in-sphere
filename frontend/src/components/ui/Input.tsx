import React from 'react';
import { cn } from '@/libs/utils';
import { inputVariants } from '@/variants';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  isValid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, isValid, ...props }: InputProps, ref) => {
    const variants = error ? 'invalid' : isValid ? 'valid' : 'default';

    return (
      <input
        ref={ref}
        {...props}
        className={cn(inputVariants({ variant: variants }), className)}
      />
    );
  },
);
