// src/components/ApplyForm.jsx
import React from 'react'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { uploadFile } from '../lib/api'
import { Link } from 'react-router-dom'

// src/components/ApplyForm.jsx
const API = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



const inputClass = "w-full p-1 mt-1 border rounded text-sm"
const radioClass = "h-5 w-5 text-blue-600 mr-1"

const ApplyForm = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  // 1️⃣ initialize your form state
  const [form, setForm] = useState({
    passportPhoto:     null,
    thumb:             null,
    signature:         null,
    documents:         [],
    qualifications:    [{ academic: '', qualification: '', board: '', year: '' }],
    declaration:       false,
    phCh:               'No',       // Physically Handicapped?
    disabilityExplain: '',
    // you can also pre-declare other text fields here if you like
  })

  // 2️⃣ separate state for easy row-editing
  const [qualificationRows, setQualificationRows] = useState(form.qualifications)

  // 3️⃣ errors + doc count error
  const [errors,   setErrors]   = useState({})
  const [docError, setDocError] = useState('')

  // 4️⃣ file input refs
  const photoRef = useRef()
  const thumbRef = useRef()
  const signRef  = useRef()
  const docsRef  = useRef()

  // 5️⃣ validation logic
  const validate = () => {
    const errs = {}

    if (!form.passportPhoto)    errs.passportPhoto     = 'Required'
    if (!form.thumb)            errs.thumb             = 'Required'
    if (!form.signature)        errs.signature         = 'Required'
    if (form.documents.length < 1) errs.documents       = 'Upload at least one file'
    if (!form.applicationFor)   errs.applicationFor   = 'Required'
    if (!form.postName)         errs.postName         = 'Required'
    if (!form.division)         errs.division         = 'Required'
    if (!form.candidateName)    errs.candidateName    = 'Required'
    if (!form.fatherName)       errs.fatherName       = 'Required'

    const anyQualification = qualificationRows.some(r =>
      r.academic && r.qualification && r.board && r.year
    )
    if (!anyQualification)
      errs.qualifications = 'Fill at least one qualification row'

    if (form.phCh === 'Yes' && !form.disabilityExplain) {
      errs.disabilityExplain = 'Please explain your disability'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  // 6️⃣ overall “is ready to enable submit?” check
  const isFormValid = () =>
    Object.keys(errors).length === 0 &&
    form.passportPhoto &&
    form.thumb &&
    form.signature &&
    form.documents.length > 0 &&
    qualificationRows.some(r => r.academic && r.qualification && r.board && r.year) &&
    form.applicationFor &&
    form.postName &&
    form.division &&
    form.candidateName &&
    form.fatherName &&
    (form.phCh !== 'Yes' || form.disabilityExplain) &&
    form.declaration

  // 7️⃣ generic change handler
  const onChange = e => {
    const { name, type, checked, files, value } = e.target
    if (type === 'file') {
      if (name === 'documents') {
        const arr = Array.from(files)
        if (arr.length < 1) {
          setDocError('Select at least one document')
          return
        } else {
          setDocError('')
        }
        setForm(f => ({ ...f, documents: arr }))
      } else {
        setForm(f => ({ ...f, [name]: files[0] }))
      }
    } else if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: checked }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }


  // 8️⃣ remove a file from your form state
  const removeFile = field => {
    setForm(f => ({ ...f, [field]: field === 'documents' ? [] : null }))
    if (field === 'passportPhoto') photoRef.current.value = ''
    if (field === 'thumb')         thumbRef.current.value = ''
    if (field === 'signature')     signRef.current.value  = ''
    if (field === 'documents')     docsRef.current.value  = ''
    setDocError('')
  }

  // 9️⃣ per-row editing of qualifications
  function onQualificationChange(idx, key, val) {
    const next = qualificationRows.map((r,i) =>
      i === idx ? { ...r, [key]: val } : r
    )
    setQualificationRows(next)
    setForm(f => ({ ...f, qualifications: next }))
  }

  // 🔟 add a new empty row
  function addRow() {
    const newRow = { academic: '', qualification: '', board: '', year: '' }
    const next   = [...qualificationRows, newRow]
    setQualificationRows(next)
    setForm(f => ({ ...f, qualifications: next }))
  }

  // ⓫ submit handler
  const onSubmit = async e => {
    e.preventDefault()
    if (!validate()) return

    try {
      // upload files
      const passportPhotoUrl = form.passportPhoto
        ? await uploadFile(form.passportPhoto)
        : ''
      const thumbUrl = form.thumb
        ? await uploadFile(form.thumb)
        : ''
      const signatureUrl = form.signature
        ? await uploadFile(form.signature)
        : ''
      const documentUrls = await Promise.all(
        form.documents.map(f => uploadFile(f))
      )

      // build JSON
      const dateOfBirth = form.dobYear && form.dobMonth && form.dobDay
        ? new Date(`${form.dobYear}-${form.dobMonth}-${form.dobDay}`)
        : null

      const age = {
        years:  parseInt(form.ageYears)  || 0,
        months: parseInt(form.ageMonths) || 0,
        days:   parseInt(form.ageDays)   || 0,
      }

      const address = {
        name:       form.addrName || '',
        postOffice: form.po       || '',
        city:       form.city     || '',
        district:   form.dist     || '',
        state:      form.state    || '',
        pin:        form.pin      || '',
      }

      const payload = {
        email: user.primaryEmailAddress.emailAddress,

        applicationFor:        form.applicationFor,
        postName:              form.postName,
        division:              form.division,
        candidateName:         form.candidateName,
        fatherName:            form.fatherName,
        community:             form.community,
        gender:                form.gender,
        religion:              form.religion,
        dateOfBirth,
        age,
        isGovtEmployee:        form.govtEmp === 'Yes',
        isExServiceman:        form.exServ   === 'Yes',
        isPhysicallyHandicapped: form.phCh   === 'Yes',
        visibleMark:           form.visibleMark,
        qualifications:        qualificationRows,
        address,
        nearestStation:        form.station,
        passportPhotoUrl,
        thumbUrl,
        signatureUrl,
        documentUrls,
        declaration:           form.declaration,
      }

      // POST
      const res = await fetch(
        `${API_BASE_URL}/api/formdata`,
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        }
      )
      if (!res.ok) throw new Error(`Status ${res.status}`)
      alert('Application submitted successfully!')
      navigate('/profile')
    } catch (err) {
      console.error(err)
      alert('Submission failed: ' + err.message)
    }
  }
  


  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Link
                      to="/profile"
                      className="inline-block px-4 py-2 mb-4 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      ← Back to Profile
      </Link>
      {/* Header + Passport Photo */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">MAHA-GENCO RECRUITMENT BOARD</h2>
          <p>APPLICATION FORM FOR EMPLOYMENT NOTICE No.</p>
        </div>
        <div
          className="relative w-24 h-24 overflow-hidden border-2 rounded cursor-pointer"
          onClick={() => photoRef.current.click()}
        >
          {form.passportPhoto ? (
            <img
              src={URL.createObjectURL(form.passportPhoto)}
              alt="Passport"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-xs font-bold text-center text-gray-500">
              Upload Passport Photo
            </div>
          )}
          {form.passportPhoto && (
            <button
              type="button"
              onClick={() => handleRemove('passportPhoto')}
              className="absolute top-0 right-0 bg-white rounded-full p-0.5"
            >
              &times;
            </button>
          )}
          <input
            type="file"
            name="passportPhoto"
            accept="image/*"
            ref={photoRef}
            onChange={onChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 1 */}
        <div>
          <label className="block text-sm font-medium">1. Application for the Post</label>
          <input name="applicationFor" onChange={onChange} className={inputClass} />
        </div>
        {/* 2 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">2. Choice of Division</label>
          <input name="division" onChange={onChange} className={inputClass} />
        </div>
        {/* 3 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">3. Name of Candidate</label>
          <input name="candidateName" onChange={onChange} className={inputClass} />
        </div>
        {/* 4 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">4. Father’s Name</label>
          <input name="fatherName" onChange={onChange} className={inputClass} />
        </div>
        {/* 5 */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">5.a. Community (Click)</label>
          <div className="flex flex-wrap items-center space-x-4">
            {['UR','SC','ST','OBC'].map(option => (
              <label key={option} className="flex items-center text-sm">
                <input
                  type="radio"
                  name="community"
                  value={option}
                  onChange={onChange}
                  className={radioClass}
                />
                {option}
              </label>
            ))}
          </div>
          <small className="block mt-1 text-xs text-gray-600">
            Community Certificate to be submitted … Annexure-3
          </small>
        </div>
        {/* 6 */}
        <div className="flex items-center space-x-4 md:col-span-2">
          <label className="text-sm font-medium">6. Gender (Click)</label>
          <label className="flex items-center">
            <input type="radio" name="gender" value="Female" onChange={onChange} className={radioClass} />
            Female
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" value="Male" onChange={onChange} className={radioClass} />
            Male
          </label>
        </div>
        {/* 7 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">7. Religion</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {['Hindu','Muslim','Christian','Sikh','Buddhist','Jain','Parsi','Others'].map(r => (
              <label key={r} className="flex items-center text-sm">
                <input type="radio" name="religion" value={r} onChange={onChange} className={radioClass} />
                {r}
              </label>
            ))}
          </div>
        </div>
        {/* 8 */} 
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">8. Date of Birth (DD/MM/YYYY)</label>
          <div className="flex mt-1 space-x-2">
            <input name="dobDay" onChange={onChange} placeholder="DD" maxLength={2} className="p-1 text-sm border rounded w-14" />
            <input name="dobMonth" onChange={onChange} placeholder="MM" maxLength={2} className="p-1 text-sm border rounded w-14" />
            <input name="dobYear" onChange={onChange} placeholder="YYYY" maxLength={4} className="w-20 p-1 text-sm border rounded" />
          </div>
        </div>
        {/* 9 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">9. Age (as on 01-01-2025)</label>
          <div className="flex items-center mt-1 space-x-2">
            <span className="text-sm">Years</span>
            <input name="ageYears" onChange={onChange} className="p-1 text-sm border rounded w-14" />
            <span className="text-sm">Months</span>
            <input name="ageMonths" onChange={onChange} className="p-1 text-sm border rounded w-14" />
            <span className="text-sm">Days</span>
            <input name="ageDays" onChange={onChange} className="p-1 text-sm border rounded w-14" />
          </div>
          <small className="block text-xs text-gray-600">(Refer para 2 of Employment Notice)</small>
        </div>
        {/* 10 */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium">10. Are you:</label>
          <div className="flex items-center space-x-2 text-sm">
            <span>(i) Govt. Employee:</span>
            <label>
              <input type="radio" name="govtEmp" value="Yes" onChange={onChange} className={radioClass} /> Yes
            </label>
            <label>
              <input type="radio" name="govtEmp" value="No" onChange={onChange} className={radioClass} /> No
            </label>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>(ii) Ex-Serviceman:</span>
            <label>
              <input type="radio" name="exServ" value="Yes" onChange={onChange} className={radioClass} /> Yes
            </label>
            <label>
              <input type="radio" name="exServ" value="No" onChange={onChange} className={radioClass} /> No
            </label>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>(iii) Physically Handicapped:</span>
            <label>
              <input type="radio" name="phCh" value="Yes" onChange={onChange} className={radioClass} /> Yes
            </label>
            <label>
              <input type="radio" name="phCh" value="No" onChange={onChange} className={radioClass} /> No
            </label>
          </div>
        </div>
        {/* 11 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">11. Visible Mark of Identification on Body</label>
          <input name="visibleMark" onChange={onChange} className={inputClass} />
        </div>
        {/* 12 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">12. Qualification (Fill only those …)</label>
          <table className="w-full mt-1 text-sm border">
            <thead>
              <tr className="bg-gray-100">
                {['Academic','Qualification','University/Board','Year of passing'].map(h => (
                  <th key={h} className="p-1 text-xs border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {qualificationRows.map((row, idx) => (
                <tr key={idx}>
                  {['academic','qualification','board','year'].map(field => (
                    <td key={field} className="p-1 border">
                      <input
                        name={`${field}_${idx}`}
                        value={row[field]}
                        onChange={e => onQualificationChange(idx, field, e.target.value)}
                        className="w-full p-1 text-xs border rounded"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addRow} className="px-3 py-1 mt-2 text-sm text-white bg-green-500 rounded">
            Add Row
          </button>
        </div>
        {/* 13 */}
        <div className="space-y-1 md:col-span-2">
          <label className="block text-sm font-medium">13. Address (for correspondence):</label>
          <input name="addrName" placeholder="Name" onChange={onChange} className={inputClass} />
          <div className="flex space-x-2">
            <input name="po" placeholder="P.O." onChange={onChange} className="w-1/2 p-1 text-sm border rounded" />
            <input name="city" placeholder="City" onChange={onChange} className="w-1/2 p-1 text-sm border rounded" />
          </div>
          <div className="flex space-x-2">
            <input name="dist" placeholder="Dist." onChange={onChange} className="w-1/3 p-1 text-sm border rounded" />
            <input name="state" placeholder="State" onChange={onChange} className="w-1/3 p-1 text-sm border rounded" />
            <input name="pin" placeholder="Pin Code" onChange={onChange} className="w-1/3 p-1 text-sm border rounded" />
          </div>
        </div>
        {/* 14 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">14. Nearest Railway Station</label>
          <input name="station" onChange={onChange} className={inputClass} />
        </div>
        {/* 15 & 16: Thumb & Signature */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {['thumb','signature'].map(field => (
            <div
              key={field}
              className="relative w-24 h-24 overflow-hidden border-2 rounded cursor-pointer"
              onClick={() => (field==='thumb' ? thumbRef.current : signRef.current).click()}
            >
              {form[field] ? (
                <img
                  src={URL.createObjectURL(form[field])}
                  alt={field}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-xs text-gray-500">
                  {field==='thumb' ? 'Upload Thumb' : 'Upload Sign'}
                </div>
              )}
              {form[field] && (
                <button
                  type="button"
                  onClick={() => handleRemove(field)}
                  className="absolute top-0 right-0 bg-white rounded-full p-0.5"
                >
                  &times;
                </button>
              )}
              <input
                type="file"
                name={field}
                accept="image/*"
                ref={field==='thumb' ? thumbRef : signRef}
                onChange={onChange}
                className="hidden"
              />
            </div>
          ))}
        </div>
        {/* 18: Documents */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Upload Documents (min 1, no max limit)</label>
          <div className="flex mt-1 space-x-2">
            <button type="button" onClick={() => docsRef.current.click()} className="px-3 py-1 text-sm bg-gray-200 rounded">
              Select Files
            </button>
            {form.documents.map((file, idx) => (
              <div key={idx} className="relative px-2 py-1 text-xs border rounded">
                {file.name}
                <button type="button" onClick={() => handleRemove('documents')} className="absolute top-0 right-0 text-red-600">
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            name="documents"
            multiple
            accept="image/*,application/pdf"
            ref={docsRef}
            onChange={onChange}
            className="hidden"
          />
          {docError && <p className="mt-1 text-xs text-red-600">{docError}</p>}
        </div>
        {/* Declaration & Submit */}
        <div className="flex items-center md:col-span-2">
          <input type="checkbox" name="declaration" onChange={onChange} className="w-4 h-4 mr-2" />
          <label className="text-sm">
            I hereby declare that the information given above is true and correct to the best of my knowledge.
          </label>
        </div>
        <div className="text-center md:col-span-2">
        <button
          type="submit"
          disabled={!isFormValid()}
          className="px-6 py-2 mt-4 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Submit
        </button>

        </div>
      </div>
    </form>
  )
}

export default ApplyForm
