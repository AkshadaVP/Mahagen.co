// src/Pages/Profile.jsx
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function Profile() {
  const { user, isLoaded } = useUser()
  const [applicationData, setApplicationData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoaded || !user) return

    const fetchApplication = async () => {
      setLoading(true)
      try {
        const email = user.primaryEmailAddress.emailAddress
        const res   = await fetch(
          `${API_BASE_URL}/api/formdata/${encodeURIComponent(email)}`
        )
        const json = await res.json()
        if (res.ok) {
          setApplicationData(json)
        }
      } catch (err) {
        console.error('Error fetching application data', err)
      } finally {
        setLoading(false)
      }
    }

    fetchApplication()
  }, [isLoaded, user])

  if (!isLoaded || loading) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center">Loading...</div>
      </>
    )
  }

  const initial = (
    user.firstName?.[0] ||
    user.primaryEmailAddress.emailAddress?.[0] ||
    'U'
  ).toUpperCase()

  // map statuses to nice labels
  const statusLabel = {
    pending:      'Pending',
    underprocess: 'Under Process',
    approved:     'Approved',
    rejected:     'Rejected',
  }[applicationData?.status] || 'Pending'

  const showPhoto =
    applicationData?.status === 'approved' &&
    applicationData.passportPhotoUrl

  // user's email used both for fetch and for constructing the view-URL
  const email = user.primaryEmailAddress.emailAddress

  return (
    <>
      <Navbar />

      <div className="max-w-3xl p-10 mx-auto my-12 mt-40 bg-gray-100 rounded-2xl">
        <Link
          to="/"
          className="inline-block px-4 py-2 mb-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-8 text-2xl font-bold">My Profile</h1>

        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="w-24 h-24 overflow-hidden bg-blue-600 rounded-full">
            {showPhoto ? (
              <img
                src={applicationData.passportPhotoUrl}
                alt="Passport"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <span className="text-3xl font-bold text-white">{initial}</span>
              </div>
            )}
          </div>

          {/* Email */}
          <p className="text-lg font-medium">{email}</p>

          {/* If no application at all */}
          {!applicationData ? (
            <Link
              to="/apply-form"
              className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Apply Now
            </Link>
          ) : (
            <>
              {/* Summary box */}
              <div className="w-full space-y-6">
                <div className="p-4 bg-white rounded shadow">
                  <p><strong>Applied For:</strong> {applicationData.applicationFor}</p>
                  <p>
                    <strong>Status:</strong>{' '}
                    <span
                      className={`px-2 py-1 rounded ${
                        applicationData.status === 'approved'
                          ? 'bg-green-500 text-white'
                          : applicationData.status === 'rejected'
                          ? 'bg-red-500 text-white'
                          : 'bg-yellow-400 text-black'
                      }`}
                    >
                      {statusLabel}
                    </span>
                  </p>
                </div>

                {/* Always show “View Full Application” once they've applied */}
                <Link
                  to={`/view-application/${encodeURIComponent(email)}`}
                  className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                >
                  View Full Application
                </Link>
              </div>

              {/* And if they’re approved, reveal the full details inline too */}
              {applicationData.status === 'approved' && (
                <div className="p-4 mt-6 space-y-2 text-sm bg-white rounded shadow">
                  <h2 className="text-lg font-semibold">Application Details</h2>
                  <p><strong>Post Name:</strong> {applicationData.postName}</p>
                  <p><strong>Division:</strong> {applicationData.division}</p>
                  <p><strong>Candidate Name:</strong> {applicationData.candidateName}</p>
                  <p><strong>Father’s Name:</strong> {applicationData.fatherName}</p>
                  <p><strong>Community:</strong> {applicationData.community}</p>
                  <p><strong>Gender:</strong> {applicationData.gender}</p>
                  <p><strong>Religion:</strong> {applicationData.religion}</p>
                  <p>
                    <strong>Date of Birth:</strong>{' '}
                    {new Date(applicationData.dateOfBirth).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Age:</strong>{' '}
                    {applicationData.age.years}y {applicationData.age.months}m {applicationData.age.days}d
                  </p>
                  <p>
                    <strong>Address:</strong>{' '}
                    {applicationData.address.name}, {applicationData.address.city}, {applicationData.address.state} – {applicationData.address.pin}
                  </p>
                  <p><strong>Nearest Station:</strong> {applicationData.nearestStation}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
