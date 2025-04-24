import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { adminUsers } from '../config/adminEmails'; // ✅ Import admin role list

const AdminDashboard = () => {
  const { user, isLoaded } = useUser();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Normalize and check role from shared config
  const email = user?.primaryEmailAddress?.emailAddress?.trim().toLowerCase();
  const isAdmin = adminUsers.some(
    (admin) => admin.email.trim().toLowerCase() === email && admin.role === "admin"
  );

  const fetchRequests = async () => {
    try {
      const res = await fetch(`https://mahagen-co.onrender.com/api/requests?status=pending`);
      const data = await res.json();
      setRequests(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requests.');
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`https://mahagen-co.onrender.com/api/requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Server error');

      fetchRequests(); // refresh
    } catch (err) {
      console.error('❌ Error while updating status:', err.message);
      alert('Something went wrong. Please check the server or try again.');
    }
  };

  useEffect(() => {
    if (isAdmin) fetchRequests();
  }, [isAdmin]);

  if (!isLoaded) return <p className="mt-10 text-center">Checking authentication...</p>;

  if (!isAdmin) {
    return (
      <div className="mt-10 font-semibold text-center text-red-600">
        🚫 Access Denied: You are not authorized to view this page.
      </div>
    );
  }

  if (loading) return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded shadow">
      <h1 className="mb-6 text-2xl font-bold">Admin Dashboard</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      {requests.length === 0 ? (
        <p>No pending requests found.</p>
      ) : (
        <table className="w-full text-sm border table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">Status</th>
              <th className="px-3 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id} className="text-center border-t">
                <td className="px-3 py-2 border">{req.name}</td>
                <td className="px-3 py-2 border">{req.email}</td>
                <td className="px-3 py-2 capitalize border">{req.status}</td>
                <td className="px-3 py-2 space-x-2 border">
                  {req.status === 'pending' && (
                    <>
                      <button
                        onClick={() => updateStatus(req._id, 'approved')}
                        className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(req._id, 'rejected')}
                        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
