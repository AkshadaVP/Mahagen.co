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
        } else {
          console.error('Fetch error:', json.error)
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

  // derive initial
  const initial = (
    user.firstName?.[0] ||
    user.primaryEmailAddress.emailAddress?.[0] ||
    'U'
  ).toUpperCase()

  // helper for status label
  const statusLabel = {
    pending:      'Pending',
    underprocess: 'Under Process',
    approved:     'Approved',
    rejected:     'Rejected',
  }[applicationData?.status] || 'Pending'

  // avatar: if approved and we have a passportPhotoUrl, show it
  const showPhoto =
    applicationData?.status === 'approved' &&
    applicationData.passportPhotoUrl

  return (
    <>
      <Navbar />

      <div className="max-w-3xl p-10 mx-auto my-12 mt-40 bg-gray-100 rounded-2xl">
        <h1 className="mb-8 text-2xl font-bold text-left">My Profile</h1>

        <div className="flex flex-col items-center space-y-4">
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

          <p className="text-lg font-medium">
            {user.primaryEmailAddress.emailAddress}
          </p>

          {!applicationData ? (
            <Link
              to="/apply-form"
              className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Apply Now
            </Link>
          ) : (
            <div className="w-full space-y-6">
              {/* summary box */}
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

              {/* full form details, only if approved */}
              {applicationData.status === 'approved' && (
                <div className="p-4 space-y-2 text-sm bg-white rounded shadow">
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
                  <p><strong>Address:</strong> {applicationData.address.name}, {applicationData.address.city}, {applicationData.address.state} – {applicationData.address.pin}</p>
                  <p><strong>Nearest Station:</strong> {applicationData.nearestStation}</p>
                  {/* signature/thumb/document URLs could be rendered here as links or images */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
