import { SignIn } from '@clerk/clerk-react';

const UserSignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};

export default UserSignIn;
