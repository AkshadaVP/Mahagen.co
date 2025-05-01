// src/Pages/ReadOnlyApplicationForm.jsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Navbar from '../components/Navbar'
import { adminUsers } from '../config/adminEmails'

const API = import.meta.env.VITE_API_BASE_URL

export default function ReadOnlyApplicationForm() {
  const { user, isLoaded } = useUser()
  const { email } = useParams()
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)

  // determine admin-ness once Clerk user loads
  const isAdmin = isLoaded && user
    ? adminUsers.some(a =>
        a.email.trim().toLowerCase() === user.primaryEmailAddress.emailAddress.trim().toLowerCase()
      )
    : false

  useEffect(() => {
    fetch(`${API}/api/formdata/${encodeURIComponent(email)}`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [email])

  if (loading) return <>
    <Navbar />
    <div className="p-8 text-center">Loading…</div>
  </>

  if (!data) return <>
    <Navbar />
    <div className="p-8 text-center">No application found.</div>
  </>

  const {
    applicationFor, postName, division, candidateName, fatherName,
    community, gender, religion, dateOfBirth, age,
    isGovtEmployee, isExServiceman, isPhysicallyHandicapped,
    visibleMark, qualifications, address, nearestStation,
    passportPhotoUrl, thumbUrl, signatureUrl, documentUrls,
    declaration, status
  } = data

  return (
    <>
      <Navbar />
      <div className="max-w-4xl p-8 mx-auto my-12 mt-40 space-y-4 bg-white rounded shadow">
        {/* Back button */}
        <Link
          to={isAdmin ? "/admin-dashboard" : "/profile"}
          className="inline-block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back
        </Link>

        <h1 className="text-2xl font-bold">Application Details</h1>

        {/* Images */}
        <div className="space-y-2">
          <strong>Images:</strong>
          <div className="flex flex-wrap gap-4">
            {passportPhotoUrl && (
              <div>
                <p className="text-sm">Passport Photo:</p>
                <img src={passportPhotoUrl} alt="Passport" className="object-cover w-32 h-32 border" />
              </div>
            )}
            {thumbUrl && (
              <div>
                <p className="text-sm">Thumb Impression:</p>
                <img src={thumbUrl} alt="Thumb" className="object-cover w-32 h-32 border" />
              </div>
            )}
            {signatureUrl && (
              <div>
                <p className="text-sm">Signature:</p>
                <img src={signatureUrl} alt="Signature" className="object-cover w-32 h-32 border" />
              </div>
            )}
          </div>
        </div>

        {/* Basic fields */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div><strong>Applied For:</strong> {applicationFor}</div>
          <div><strong>Post Name:</strong> {postName}</div>
          <div><strong>Division:</strong> {division}</div>
          <div><strong>Candidate Name:</strong> {candidateName}</div>
          <div><strong>Father’s Name:</strong> {fatherName}</div>
          <div><strong>Community:</strong> {community}</div>
          <div><strong>Gender:</strong> {gender}</div>
          <div><strong>Religion:</strong> {religion}</div>
          <div>
            <strong>Date of Birth:</strong>{' '}
            {new Date(dateOfBirth).toLocaleDateString()}
          </div>
          <div>
            <strong>Age:</strong> {age.years}y {age.months}m {age.days}d
          </div>
          <div><strong>Govt Employee:</strong> {isGovtEmployee ? 'Yes' : 'No'}</div>
          <div><strong>Ex-Serviceman:</strong> {isExServiceman ? 'Yes' : 'No'}</div>
          <div><strong>Physically Handicapped:</strong> {isPhysicallyHandicapped ? 'Yes' : 'No'}</div>
          <div><strong>Visible Mark:</strong> {visibleMark}</div>
          <div className="md:col-span-2">
            <strong>Address:</strong> {address.name}, {address.postOffice}, {address.city}, {address.district}, {address.state} – {address.pin}
          </div>
          <div><strong>Nearest Station:</strong> {nearestStation}</div>
          <div><strong>Declaration Accepted:</strong> {declaration ? 'Yes' : 'No'}</div>
          <div><strong>Status:</strong> {status}</div>
        </div>

        {/* Qualifications */}
        <div className="space-y-4">
          <strong>Qualifications:</strong>
          <table className="w-full mt-2 text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-1 border">Academic</th>
                <th className="p-1 border">Qualification</th>
                <th className="p-1 border">Board/University</th>
                <th className="p-1 border">Year</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((q, i) => (
                <tr key={i}>
                  <td className="p-1 border">{q.academic}</td>
                  <td className="p-1 border">{q.qualification}</td>
                  <td className="p-1 border">{q.board}</td>
                  <td className="p-1 border">{q.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Documents */}
        {documentUrls.length > 0 && (
          <div>
            <strong>Uploaded Documents:</strong>
            <ul className="list-disc list-inside">
              {documentUrls.map((url, i) => (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Document {i + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
