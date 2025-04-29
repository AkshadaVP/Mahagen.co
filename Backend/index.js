const express        = require('express')
const mongoose       = require('mongoose')
const cors           = require('cors')
require('dotenv').config()

const uploadRoutes   = require('./routes/upload')
const requestRoutes  = require('./routes/requestRoutes')
const formRoutes     = require('./routes/formRoutes')
const { clerkClient }= require('@clerk/clerk-sdk-node')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/upload',      uploadRoutes)
app.use('/api/requests',    requestRoutes)
app.use('/api/formdata',    formRoutes)
app.use('/api/application', formRoutes)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas')
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message)
    process.exit(1)
  })

module.exports = { clerkClient }
