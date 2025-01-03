// import { useState } from 'react';

import { AuthHeader, SignUpForm } from '@/components';

export const SignUp = () => {
  // const [user, setUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  return (
    <section className='relative flex h-screen flex-col items-center justify-center bg-bg-form bg-cover bg-center'>
      <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-black via-black/80 to-black/30' />
      <div className='z-10 flex w-3/4 flex-col gap-y-5 rounded-xl p-8 text-white'>
        <AuthHeader redirectDescription='Sign In' />
        <SignUpForm />
      </div>
    </section>
  );
};
