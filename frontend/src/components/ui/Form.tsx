import { IconType } from 'react-icons';

interface FormFieldProps {
  children: React.ReactNode;
  errorMessage?: string;
  Icon?: IconType;
}

export const FormField = ({ children, errorMessage, Icon }: FormFieldProps) => {
  return (
    <div className='relative flex h-[54px] w-full flex-col gap-y-2'>
      {children}
      {Icon && (
        <Icon
          className='absolute right-2 top-2 text-gray-300'
          size={20}
        />
      )}

      {errorMessage && <p className='text-xs text-rose-500'>{errorMessage}</p>}
    </div>
  );
};
