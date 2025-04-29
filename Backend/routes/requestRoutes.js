const express    = require('express')
const router     = express.Router()
const Request    = require('../models/request')
const FormData   = require('../models/FormData')
const { clerkClient } = require('@clerk/clerk-sdk-node')

// POST /api/requests  
//  • if req.body.applicationFor exists → treat as application‐form  
//  • otherwise → treat as login‐access request
router.post('/', async (req, res) => {
  if (req.body.applicationFor) {
    try {
      const sub = new FormData(req.body)
      await sub.save()
      return res.status(201).json({ message: 'Application submitted' })
    } catch (err) {
      console.error('Error saving application:', err.message)
      return res.status(400).json({ error: err.message })
    }
  }

  const { name, email } = req.body
  try {
    const r = new Request({ name, email })
    await r.save()
    res.status(201).json({ message: 'Access request submitted' })
  } catch (err) {
    console.error('Error saving access request:', err.message)
    res.status(400).json({ error: 'Email already used or something went wrong.' })
  }
})

// GET /api/requests?status=…  
router.get('/', async (req, res) => {
  const filter = req.query.status ? { status: req.query.status } : {}
  try {
    const list = await Request.find(filter)
    res.json(list)
  } catch (err) {
    console.error('Error fetching requests:', err.message)
    res.status(500).json({ error: 'Failed to fetch requests' })
  }
})

// PUT /api/requests/:id  
router.put('/:id', async (req, res) => {
  try {
    const reqDoc = await Request.findById(req.params.id)
    if (!reqDoc) return res.status(404).json({ error: 'Request not found' })

    reqDoc.status = req.body.status
    await reqDoc.save()

    if (reqDoc.status === 'approved') {
      const tempPassword = Math.random().toString(36).slice(-8)
      let user = (await clerkClient.users.getUserList({ emailAddress: reqDoc.email }))[0]
      if (!user) {
        user = await clerkClient.users.createUser({
          emailAddress: [reqDoc.email],
          password:      tempPassword,
          publicMetadata:{ role: 'user' }
        })
      }
      const emailHtml = `
        <h1>🎉 You’re Approved!</h1>
        <p>Email: ${reqDoc.email}</p>
        <p>Password: ${tempPassword}</p>
        <p><a href="http://localhost:5173/sign-in">Log in here</a></p>
      `
      await fetch('https://confirmation-api.onrender.com/send-email', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: reqDoc.email,
          subject: 'Your Login Details',
          htmlContent: emailHtml
        })
      })
    }

    res.json({ message: `Request ${reqDoc.status}` })
  } catch (err) {
    console.error('Error in PUT /:id:', err.message)
    res.status(500).json({ error: 'Failed to update request' })
  }
})

module.exports = router
