import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegAddressCard } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@/libs/types';
import { cn } from '@/libs/utils';
import { SignUpSchema, signUpSchema } from '@/schemas';
import { Button, FormField, Input } from './ui';

export const SignUpForm = () => {
  const id = useId();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: SignUpSchema) => {
    const user: User = {
      ...data,
      id,
      createdAt: String(new Date()),
      updatedAt: String(new Date()),
    };

    console.log('Form data', user);
    reset();
  };

  return (
    <form
      className='flex flex-col gap-y-3'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex gap-x-10'>
        <FormField
          errorMessage={errors.firstName?.message}
          Icon={FaRegAddressCard}
        >
          <Input
            type='text'
            {...register('firstName')}
            className={cn('bg-gray-600')}
            error={errors.firstName?.message}
          />
        </FormField>
        <FormField
          errorMessage={errors.lastName?.message}
          Icon={FaRegAddressCard}
        >
          <Input
            type='text'
            {...register('lastName')}
            className='bg-gray-600'
            error={errors.lastName?.message}
          />
        </FormField>
      </div>
      <FormField
        errorMessage={errors.email?.message}
        Icon={MdEmail}
      >
        <Input
          type='email'
          {...register('email')}
          className='bg-gray-600'
          error={errors.email?.message}
        />
      </FormField>
      <FormField
        errorMessage={errors.password?.message}
        Icon={IoEye}
      >
        <Input
          type='password'
          {...register('password')}
          className='bg-gray-600'
          error={errors.password?.message}
        />
      </FormField>

      <Button>Sign Up</Button>
    </form>
  );
};
