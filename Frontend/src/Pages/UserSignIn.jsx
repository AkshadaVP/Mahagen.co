// src/pages/UserSignIn.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

export default function UserSignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn
        routing="path"
        path="/sign-in"
        // if the user is already authenticated, send them home:
        fallbackRedirectUrl="/profile"
        // fallback if something goes sideways (eg: factor-one step)
        forceRedirectUrl="/profile"
        // link shown under the widget: “New user? Register”
        signUpUrl="/create-account"
      />
    </div>
  );
}
