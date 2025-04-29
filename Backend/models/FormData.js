// models/FormData.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  email:    { type: String, required: true, index: true },
  status:   { type: String, default: 'pending', enum: ['pending','underprocess','approved','rejected'] },
  applicationFor: String,
  postName:       String,
  division:       String,
  candidateName:  String,
  fatherName:     String,
  community:      String,
  gender:         String,
  religion:       String,
  dateOfBirth:    Date,
  age: {
    years:  Number,
    months: Number,
    days:   Number
  },
  isGovtEmployee:        Boolean,
  isExServiceman:        Boolean,
  isPhysicallyHandicapped:Boolean,
  visibleMark:    String,
  qualifications: [{ academic: String, qualification: String, board: String, year: String }],
  address: {
    name:       String,
    postOffice: String,
    city:       String,
    district:   String,
    state:      String,
    pin:        String
  },
  nearestStation: String,
  passportPhotoUrl: String,
  thumbUrl:         String,
  signatureUrl:     String,
  documentUrls:     [String],
  declaration:      Boolean,
  createdAt:        { type: Date, default: Date.now }
}, {
  collection: 'formdata'
});

module.exports = mongoose.model('FormData', formDataSchema);
