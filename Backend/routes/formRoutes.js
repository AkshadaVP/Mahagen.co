const express = require('express')
const router  = express.Router()
const FormData = require('../models/FormData')

// POST /api/formdata          → save a new application form
router.post('/', async (req, res) => {
  try {
    const submission = new FormData(req.body)
    await submission.save()
    res.status(201).json({ message: 'Application submitted', id: submission._id })
  } catch (err) {
    console.error('Error saving formdata:', err.message)
    res.status(400).json({ error: err.message })
  }
})

// GET /api/formdata           → list all submissions (admin)
router.get('/', async (req, res) => {
  try {
    const all = await FormData.find().sort({ createdAt: -1 })
    res.json(all)
  } catch (err) {
    console.error('Error fetching formdata:', err.message)
    res.status(500).json({ error: 'Failed to fetch submissions' })
  }
})

// GET /api/formdata/:email    → fetch one submission by email
router.get('/:email', async (req, res) => {
  try {
    const sub = await FormData.findOne({ email: req.params.email })
    if (!sub) return res.status(404).json({ error: 'No application found for this email.' })
    res.json(sub)
  } catch (err) {
    console.error('Error fetching by email:', err.message)
    res.status(500).json({ error: 'Failed to fetch submission' })
  }
})

// PUT /api/formdata/:id       → update status of a submission
router.put('/:id', async (req, res) => {
  try {
    const sub = await FormData.findById(req.params.id)
    if (!sub) return res.status(404).json({ error: 'Submission not found' })
    sub.status = req.body.status
    await sub.save()
    res.json({ message: 'Status updated', status: sub.status })
  } catch (err) {
    console.error('Error updating status:', err.message)
    res.status(500).json({ error: 'Failed to update status' })
  }
})

module.exports = router
