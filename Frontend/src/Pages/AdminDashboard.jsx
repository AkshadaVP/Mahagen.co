// src/Pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { adminUsers } from '../config/adminEmails';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const API = import.meta.env.VITE_API_BASE_URL;

const TABS = [
  { key: 'accounts', label: 'Account Approval' },
  { key: 'forms',    label: 'Form Approval'    },
];

const STATUS_OPTIONS = {
  accounts: ['approved', 'rejected'],
  forms:    ['underprocess', 'approved', 'rejected'],
};

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState('accounts');
  const [accounts,   setAccounts] = useState([]);
  const [forms,      setForms]    = useState([]);
  const [loading,    setLoading]  = useState(false);
  const [error,      setError]    = useState('');

  const email = user?.primaryEmailAddress?.emailAddress.trim().toLowerCase();
  const isAdmin = adminUsers.some(a =>
    a.email.trim().toLowerCase() === email && a.role === 'admin'
  );

  useEffect(() => {
    if (!isLoaded || !isAdmin) return;
    fetchData();
  }, [isLoaded, isAdmin, activeTab]);

  async function fetchData() {
    setLoading(true);
    setError('');
    try {
      if (activeTab === 'accounts') {
        const res = await fetch(`${API}/api/requests?status=pending`);
        setAccounts(await res.json());
      } else {
        const res = await fetch(`${API}/api/formdata`);
        setForms(await res.json());
      }
    } catch {
      setError('Failed to load data.');
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    const route = activeTab === 'accounts'
      ? `${API}/api/requests/${id}`
      : `${API}/api/formdata/${id}`;
    try {
      const res = await fetch(route, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      fetchData();
    } catch {
      alert('Error updating status');
    }
  }

  if (!isLoaded) return <p className="mt-10 text-center">Checking authentication…</p>;
  if (!isAdmin)  return <p className="mt-10 text-center text-red-600">Access Denied</p>;

  const items   = activeTab === 'accounts' ? accounts : forms;
  const options = STATUS_OPTIONS[activeTab];

  return (
    <>
      <Navbar />
      
      <div className="max-w-5xl p-6 mx-auto my-10 mt-40 bg-white rounded shadow">
        <Link
                  to="/"
                  className="inline-block px-4 py-2 m-3 bg-gray-200 rounded hover:bg-gray-300"
                >
                  ← Back to Home
                </Link>
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex mb-4 border-b">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 -mb-px font-medium ${
                activeTab === tab.key
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {error && <p className="mb-4 text-red-500">{error}</p>}
        {loading && <p className="text-center">Loading…</p>}

        {!loading && (
          <table className="w-full text-sm border table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email / ID</th>
                <th className="p-2 border">Current Status</th>
                <th className="p-2 border">Set Status</th>
                {activeTab === 'forms' && <th className="p-2 border">View Form</th>}
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item._id} className="text-center border-t">
                  <td className="p-2 border">
                    {activeTab === 'accounts' ? item.name : item.candidateName}
                  </td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 capitalize border">{item.status}</td>
                  <td className="p-2 border">
                    <div className="flex justify-center space-x-4">
                      {options.map(statusKey => (
                        <label key={statusKey} className="flex items-center space-x-1">
                          <input
                            type="checkbox"
                            checked={item.status === statusKey}
                            onChange={() => updateStatus(item._id, statusKey)}
                            className="w-4 h-4"
                          />
                          <span className="capitalize">
                            {statusKey.replace('underprocess','under process')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                  {activeTab === 'forms' && (
                    <td className="p-2 border">
                      <Link
                        to={`/view-application/${encodeURIComponent(item.email)}`}
                        className="px-2 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                      >
                        View Form
                      </Link>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
