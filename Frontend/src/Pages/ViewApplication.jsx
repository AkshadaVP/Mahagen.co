// src/Pages/ViewApplication.jsx
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const API = import.meta.env.VITE_API_BASE_URL;

export default function ViewApplication() {
  const { user, isLoaded } = useUser();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded || !user) return;
    (async () => {
      try {
        const email = encodeURIComponent(user.primaryEmailAddress.emailAddress);
        const res = await fetch(`${API}/api/formdata/${email}`);
        if (!res.ok) {
          const json = await res.json();
          throw new Error(json.error || res.statusText);
        }
        setApp(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [isLoaded, user]);

  if (!isLoaded || loading) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center">Loading application…</div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center text-red-600">{error}</div>
        <div className="text-center">
          <button onClick={() => navigate(-1)} className="px-4 py-2 mt-4 text-white bg-blue-600 rounded">
            Back to Profile
          </button>
        </div>
      </>
    );
  }

  // helper to render an image or link
  const Img = ({ url, label }) =>
    url ? (
      <div className="space-y-1">
        <div className="font-medium">{label}:</div>
        <img src={url} alt={label} className="object-contain rounded shadow max-h-40" />
      </div>
    ) : null;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl p-6 mx-auto my-10 bg-white rounded shadow mt-50">
        <h1 className="mb-6 text-2xl font-bold">Your Application</h1>

        <div className="space-y-4">
        <div className='flex justify-between gap-3'>
                <Img url={app.passportPhotoUrl} label="Photo" />
                <Img url={app.thumbUrl} label="Thumb Print" />
                <Img url={app.signatureUrl} label="Signature" />
        </div>
          <div><strong>Application For:</strong> {app.applicationFor}</div>
          <div><strong>Post Name:</strong> {app.postName}</div>
          <div><strong>Division:</strong> {app.division}</div>
          <div><strong>Candidate Name:</strong> {app.candidateName}</div>
          <div><strong>Father’s Name:</strong> {app.fatherName}</div>
          <div><strong>Community:</strong> {app.community}</div>
          <div><strong>Gender:</strong> {app.gender}</div>
          <div><strong>Religion:</strong> {app.religion}</div>
          <div>
            <strong>Date of Birth:</strong>{' '}
            {app.dateOfBirth ? new Date(app.dateOfBirth).toLocaleDateString() : 'N/A'}
          </div>
          <div>
            <strong>Age:</strong> {app.age.years}y {app.age.months}m {app.age.days}d
          </div>
          <div><strong>Govt Employee:</strong> {app.isGovtEmployee ? 'Yes' : 'No'}</div>
          <div><strong>Ex-Serviceman:</strong> {app.isExServiceman ? 'Yes' : 'No'}</div>
          <div><strong>Physically Handicapped:</strong> {app.isPhysicallyHandicapped ? 'Yes' : 'No'}</div>
          <div><strong>Visible Mark:</strong> {app.visibleMark}</div>

          <div>
            <strong>Qualifications:</strong>
            <ul className="pl-6 list-disc">
              {app.qualifications.map((q, i) => (
                <li key={i}>
                  {q.academic} – {q.qualification}, {q.board} ({q.year})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Address:</strong> {app.address.name}, {app.address.postOffice}, {app.address.city},{' '}
            {app.address.district}, {app.address.state} – {app.address.pin}
          </div>
          <div><strong>Nearest Station:</strong> {app.nearestStation}</div>

         

          {app.documentUrls?.length > 0 && (
            <div>
              <strong>Documents:</strong>
              <ul className="pl-6 space-y-1 list-disc">
                {app.documentUrls.map((u, i) => (
                  <li key={i}>
                    <a href={u} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                      Document {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div><strong>Declaration:</strong> {app.declaration ? '✔️' : '❌'}</div>
          <div>
            <strong>Status:</strong>{' '}
            <span
              className={`px-2 py-1 rounded ${
                app.status === 'approved'
                  ? 'bg-green-500 text-white'
                  : app.status === 'rejected'
                  ? 'bg-red-500 text-white'
                  : 'bg-yellow-400 text-black'
              }`}
            >
              {app.status}
            </span>
          </div>

          <div className="pt-4 text-center">
            <Link
              to="/profile"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
