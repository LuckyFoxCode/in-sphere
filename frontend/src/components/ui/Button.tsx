import { cn } from '@/libs/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => (
  <button
    {...props}
    className={cn(
      'rounded-lg bg-blue-500 px-2 py-1 text-white transition-all duration-300 ease-in-out hover:bg-blue-600',
      className,
    )}
  >
    {children}
  </button>
);
