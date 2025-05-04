import React, { useState } from 'react';
import { useNavigate }      from 'react-router-dom';

const API = import.meta.env.VITE_API_BASE_URL;

async function sendOtpRequest(email) {
  const res = await fetch(`${API}/api/auth/send-otp`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ email })
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || res.statusText);
  }
  return res.json();
}

async function verifyOtpRequest({ email, code, password }) {
  const res = await fetch(`${API}/api/auth/verify-otp`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ email, code, password })
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || res.statusText);
  }
  return res.json();
}

export default function CreateAccount() {
  const [step, setStep]         = useState(1);
  const [email, setEmail]       = useState('');
  const [code, setCode]         = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const nav = useNavigate();

  const handleSendOtp = async e => {
    e.preventDefault();
    setError('');
    try {
      await sendOtpRequest(email);
      setStep(2);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerify = async e => {
    e.preventDefault();
    setError('');
    try {
      await verifyOtpRequest({ email, code, password });
      alert('✅ Account created! Please sign in.');
      nav('/sign-in');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md p-8 mx-auto my-16 mt-40 bg-white rounded shadow">
      {step === 1 ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <h2 className="text-xl font-bold">Register</h2>
          <input
            type="email" required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <button className="w-full py-2 text-white bg-blue-600 rounded">
            Send OTP
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      ) : (
        <form onSubmit={handleVerify} className="space-y-4">
          <h2 className="text-xl font-bold">Verify & Set Password</h2>
          <input
            type="text" required
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="OTP"
            className="w-full p-2 border rounded"
          />
          <input
            type="password" required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button className="w-full py-2 text-white bg-green-600 rounded">
            Create Account
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
