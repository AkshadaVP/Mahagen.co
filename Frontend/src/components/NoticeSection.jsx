// src/components/NoticeSection.jsx
import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Calendar, FileText } from 'react-feather'
import bgVideoImg from '../assets/video001img.png'

const SAMPLE_NOTICES = [
  { text: 'RFx 3000046554-IFB with Revised Schedule along with amendment 6 for Koradi 2…', date: '2025-04-25' },
  { text: 'Result of 7th Higher Higher Account Exam held on 07.12.2024 to 09.12.2024 O…',    date: '2025-03-27' },
  { text: 'Tender Notice No. XYZ123 for Srujan Magazine Printing Services…',               date: '2025-04-15' },
  { text: 'Award/Recognition: Mahagenco wins National Energy Efficiency Award 2025…',      date: '2025-02-10' },
]

export default function NoticeSection({ notices = SAMPLE_NOTICES }) {
  const [idx, setIdx] = useState(0)
  const total = notices.length
  const next = (idx + 1) % total

  // auto-rotate every 4s
  useEffect(() => {
    if (total < 2) return
    const tid = setTimeout(() => setIdx(next), 4000)
    return () => clearTimeout(tid)
  }, [idx, next, total])

  const Card = ({ notice }) => (
    <div className="flex flex-col justify-between flex-1 p-6 bg-white shadow-lg bg-opacity-90 rounded-2xl h-72">
      <div className="flex items-center mb-4 space-x-3">
        <div className="p-2 text-white bg-blue-600 rounded-full">
          <FileText size={20} />
        </div>
        <h3 className="text-lg font-semibold">Latest Notice</h3>
      </div>
      <p className="flex-1 mb-4 text-sm leading-snug text-gray-800">{notice.text}</p>
      <div className="flex items-center text-xs text-gray-500">
        <Calendar size={14} className="mr-1" />
        {notice.date}
      </div>
    </div>
  )

  return (
    <section
      className="relative flex items-center justify-center w-full mt-20 overflow-hidden h-120"
      style={{ background: `url(${bgVideoImg}) center/cover no-repeat` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-stretch gap-8 px-8 md:flex-row">
        <Card notice={notices[idx]} />
        <Card notice={notices[next]} />
      </div>

      <div className="absolute z-20 flex space-x-4 bottom-16 right-8">
        <button
          onClick={() => setIdx((idx - 1 + total) % total)}
          className="p-3 bg-white rounded-full shadow hover:bg-gray-200"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={() => setIdx(next)}
          className="p-3 bg-white rounded-full shadow hover:bg-gray-200"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}
