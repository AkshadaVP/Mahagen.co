// src/Pages/UserSignUp.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE_URL

export default function UserSignUp() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || res.statusText)
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="w-full max-w-md p-8 mx-auto my-12 bg-white rounded shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center">User Sign Up</h1>

      {submitted ? (
        <div className="space-y-4 text-center">
          <p className="font-semibold text-green-600">
            ✅ Your request has been submitted. We’ll contact you soon!
          </p>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            ← Back to Home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit Request
          </button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      )}
    </div>
  )
}
