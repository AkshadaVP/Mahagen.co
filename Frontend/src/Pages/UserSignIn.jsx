// src/pages/UserSignIn.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

export default function UserSignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn
        routing="path"
        path="/sign-in"
        // send everyone to the home page after sign-in (and on any fallback)
        fallbackRedirectUrl="/"
        forceRedirectUrl="/"
        // link shown under the widget: “New user? Register”
        signUpUrl="/create-account"
      />
    </div>
  );
}
