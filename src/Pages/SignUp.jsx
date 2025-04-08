import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url('/src/assets/video001img.png')` }}
    >
      {/* Custom Container */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md bg-opacity-90">
        {/* Clerk's SignUp Form */}
        <SignUp routing="path" path="/signup" />
      </div>
    </div>
  );
};

export default SignUpPage;
