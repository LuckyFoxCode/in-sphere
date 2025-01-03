interface AuthHeaderProps {
  redirectDescription: 'Sign Up' | 'Sign In';
}

export const AuthHeader = ({ redirectDescription }: AuthHeaderProps) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-xs uppercase text-gray-400'>Start for free</h2>
      <p className='text-3xl'>Create new account</p>
      <p className='text-xs text-gray-400'>
        Already a member?
        <a
          href='#'
          className='animate ml-1 py-1 text-blue-500 hover:text-blue-600'
        >
          {redirectDescription}
        </a>
      </p>
    </div>
  );
};
