// src/pages/ApplyFormPage.jsx
import React from 'react'
import bg from '../assets/video001img.png'
import ApplyForm from '../components/ApplyForm'

const ApplyFormPage = () => {
  return (
    <div className="relative w-full h-screen p-4">
      {/* Fixed full‐screen background */}
      <div
        className="fixed inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Scrollable form container */}
      <div className="relative z-10 h-full max-w-6xl p-8 mx-auto overflow-y-auto bg-white shadow-lg bg-opacity-80 rounded-2xl">
        <ApplyForm />
      </div>
    </div>
  )
}

export default ApplyFormPage
