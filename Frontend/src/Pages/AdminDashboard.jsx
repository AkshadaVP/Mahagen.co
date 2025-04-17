import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ Optional: show server error

  // ✅ Fetch all pending requests
  const fetchRequests = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/requests?status=pending');
      const data = await res.json();
      setRequests(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requests.');
      setLoading(false);
    }
  };

  // ✅ Update request status (approve/reject)
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Server error');
      }

      // ✅ Refresh the list
      fetchRequests();
    } catch (err) {
      console.error('❌ Error while updating status:', err.message);
      alert('Something went wrong. Please check the server or try again.');
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {requests.length === 0 ? (
        <p>No pending requests found.</p>
      ) : (
        <table className="w-full table-auto text-sm border">
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
                <td className="px-3 py-2 border capitalize">{req.status}</td>
                <td className="px-3 py-2 border space-x-2">
                  {req.status === 'pending' && (
                    <>
                      <button
                        onClick={() => updateStatus(req._id, 'approved')}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(req._id, 'rejected')}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
