// src/Pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useUser }                  from '@clerk/clerk-react';
import { adminUsers }               from '../config/adminEmails';
import { Link }                     from 'react-router-dom';

const API = import.meta.env.VITE_API_BASE_URL;
const STATUS_OPTIONS = ['underprocess', 'approved', 'rejected'];

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const [forms,   setForms]   = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');

  const email   = user?.primaryEmailAddress?.emailAddress.trim().toLowerCase();
  const isAdmin = adminUsers.some(a =>
    a.email.trim().toLowerCase() === email && a.role === 'admin'
  );

  useEffect(() => {
    if (!isLoaded || !isAdmin) return;
    fetchForms();
  }, [isLoaded, isAdmin]);

  async function fetchForms() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/api/formdata`);
      if (!res.ok) throw new Error();
      setForms(await res.json());
    } catch {
      setError('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      const res = await fetch(`${API}/api/formdata/${id}`, {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      fetchForms();
    } catch {
      alert('Error updating status');
    }
  }

  if (!isLoaded) return <p className="mt-10 text-center">Checking authentication…</p>;
  if (!isAdmin)  return <p className="mt-10 text-center text-red-600">Access Denied</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      <div className="max-w-5xl w-full p-6 bg-white rounded-xl shadow-lg">
        <Link
          to="/"
          className="inline-block mb-6 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 text-3xl font-semibold text-gray-800">Form Approval</h1>

        {error && <p className="mb-4 text-red-500">{error}</p>}
        {loading && <p className="text-center text-gray-500">Loading…</p>}

        {!loading && (
          <table className="w-full table-auto text-sm text-left text-gray-600 border-separate border-spacing-0.5">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border rounded-tl-lg">Candidate Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Current Status</th>
                <th className="p-3 border">Set Status</th>
                <th className="p-3 border rounded-tr-lg">View Form</th>
              </tr>
            </thead>
            <tbody>
              {forms.map(form => (
                <tr key={form._id} className="bg-white hover:bg-gray-50 transition-colors duration-300">
                  <td className="p-3 border">{form.candidateName}</td>
                  <td className="p-3 border">{form.email}</td>
                  <td className="p-3 capitalize border">{form.status}</td>
                  <td className="p-3 border">
                    <div className="flex justify-center space-x-4">
                      {STATUS_OPTIONS.map(opt => (
                        <label key={opt} className="flex items-center space-x-1">
                          <input
                            type="radio"
                            name={`status-${form._id}`}
                            checked={form.status === opt}
                            onChange={() => updateStatus(form._id, opt)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="capitalize text-gray-700">
                            {opt.replace('underprocess', 'under process')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 border">
                    <Link
                      to={`/view-application/${encodeURIComponent(form.email)}`}
                      className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-all duration-300"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
