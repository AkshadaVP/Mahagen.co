// src/Pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react'
import { useUser }                  from '@clerk/clerk-react'
import { adminUsers }               from '../config/adminEmails'
import { Link }                     from 'react-router-dom'
import Navbar                       from '../components/Navbar'

const API = import.meta.env.VITE_API_BASE_URL
const STATUS_OPTIONS = ['underprocess', 'approved', 'rejected']

export default function AdminDashboard() {
  const { user, isLoaded } = useUser()
  const [forms,   setForms]   = useState([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  const email   = user?.primaryEmailAddress?.emailAddress.trim().toLowerCase()
  const isAdmin = adminUsers.some(a =>
    a.email.trim().toLowerCase() === email && a.role === 'admin'
  )

  useEffect(() => {
    if (!isLoaded || !isAdmin) return
    fetchForms()
  }, [isLoaded, isAdmin])

  async function fetchForms() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/formdata`)
      if (!res.ok) throw new Error()
      setForms(await res.json())
    } catch {
      setError('Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id, status) {
    try {
      const res = await fetch(`${API}/api/formdata/${id}`, {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ status }),
      })
      if (!res.ok) throw new Error()
      fetchForms()
    } catch {
      alert('Error updating status')
    }
  }

  if (!isLoaded) return <p className="mt-10 text-center">Checking authentication…</p>
  if (!isAdmin)  return <p className="mt-10 text-center text-red-600">Access Denied</p>

  return (
    <>
      <Navbar />

      <div className="max-w-5xl p-6 mx-auto my-10 mt-40 bg-white rounded shadow">
        <Link
          to="/"
          className="inline-block px-4 py-2 mb-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 text-3xl font-bold">Form Approval</h1>

        {error && <p className="mb-4 text-red-500">{error}</p>}
        {loading && <p className="text-center">Loading…</p>}

        {!loading && (
          <table className="w-full text-sm border table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Candidate Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Current Status</th>
                <th className="p-2 border">Set Status</th>
                <th className="p-2 border">View Form</th>
              </tr>
            </thead>
            <tbody>
              {forms.map(form => (
                <tr key={form._id} className="text-center border-t">
                  <td className="p-2 border">{form.candidateName}</td>
                  <td className="p-2 border">{form.email}</td>
                  <td className="p-2 capitalize border">{form.status}</td>
                  <td className="p-2 border">
                    <div className="flex justify-center space-x-4">
                      {STATUS_OPTIONS.map(opt => (
                        <label key={opt} className="flex items-center space-x-1">
                          <input
                            type="radio"
                            name={`status-${form._id}`}
                            checked={form.status === opt}
                            onChange={() => updateStatus(form._id, opt)}
                            className="w-4 h-4"
                          />
                          <span className="capitalize">
                            {opt.replace('underprocess','under process')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 border">
                    <Link
                      to={`/view-application/${encodeURIComponent(form.email)}`}
                      className="px-2 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
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
    </>
  )
}
