import React, { useState, useMemo } from 'react'
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

// Helper: detect any sequence of three ascending chars (letters or digits)
function hasSequentialChars(str) {
  for (let i = 0; i < str.length - 2; i++) {
    const c1 = str.charCodeAt(i);
    const c2 = str.charCodeAt(i + 1);
    const c3 = str.charCodeAt(i + 2);
    if (c2 === c1 + 1 && c3 === c2 + 1) {
      return true;
    }
  }
  return false;
}

export default function CreateAccount() {
  const [step, setStep]         = useState(1);
  const [email, setEmail]       = useState('');
  const [code, setCode]         = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const nav = useNavigate();

  // derive local part of email for "no username" check
  const localPart = email.split('@')[0] || '';

  const validations = useMemo(() => ({
    length:      password.length >= 10,
    uppercase:   /[A-Z]/.test(password),
    lowercase:   /[a-z]/.test(password),
    number:      /[0-9]/.test(password),
    symbol:      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noSequence:  !hasSequentialChars(password),
    noUsername:  localPart ? !password.toLowerCase().includes(localPart.toLowerCase()) : true,
  }), [password, localPart]);

  const isStrong = Object.values(validations).every(Boolean);

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
            type="email"
            required
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
            type="text"
            required
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="OTP"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />

          {/* Strong password conditions */}
          <div className="space-y-1 text-sm">
            <p className="font-medium">Password must contain:</p>
            <p className={validations.length     ? 'text-green-600' : 'text-red-600'}>• At least 10 characters</p>
            <p className={validations.uppercase  ? 'text-green-600' : 'text-red-600'}>• An uppercase letter (A–Z)</p>
            <p className={validations.lowercase  ? 'text-green-600' : 'text-red-600'}>• A lowercase letter (a–z)</p>
            <p className={validations.number     ? 'text-green-600' : 'text-red-600'}>• A number (0–9)</p>
            <p className={validations.symbol     ? 'text-green-600' : 'text-red-600'}>• A symbol (e.g. !@#$%^&*)</p>
            <p className={validations.noSequence ? 'text-green-600' : 'text-red-600'}>• No sequential letters or numbers (e.g. abc or 123)</p>
            <p className={validations.noUsername ? 'text-green-600' : 'text-red-600'}>• Must not contain your email username</p>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded disabled:opacity-50"
            disabled={!isStrong}
          >
            Create Account
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}

