import React, { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const { signUp, setActive } = useSignUp();
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        console.log('Email verified successfully');
        navigate('/');
      } else {
        setErrorMessage('Verification failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Invalid verification code.');
      console.error('Verification error:', error);
    }
  };

  return (
    <div className="verify-container">
      <h2 className="text-2xl text-center">Email Verification</h2>
      <form onSubmit={handleVerify} className="space-y-4">
        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
