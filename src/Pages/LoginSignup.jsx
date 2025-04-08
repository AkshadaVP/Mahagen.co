import React, { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const { signIn, isLoaded, isError, errorMessage } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await signIn.create({ identifier: email, password });
      if (result.status === 'complete') {
        // Set the session and navigate to home
        await signIn.setActive({ session: result.createdSessionId });
        navigate('/'); // Redirect to homepage
      } else {
        console.warn('Unexpected login status:', result.status);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) return <div>Loading...</div>; // Show a loading spinner

  return (
    <div
      className="flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url('/assets/video001img.png')` }} // Your custom background image
    >
      {/* Custom Container for Login Form */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md bg-opacity-90">
        <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {isError && <div className="text-sm text-red-500">{errorMessage}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:text-blue-600">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
