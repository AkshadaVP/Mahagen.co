const express  = require('express');
const multer   = require('multer');
const imagekit = require('../lib/imagekit');
const router   = express.Router();
const upload   = multer(); // in-memory

router.post('/upload-photo', upload.single('file'), async (req, res) => {
  try {
    const result = await imagekit.upload({
      file:     req.file.buffer.toString('base64'),
      fileName: req.file.originalname,
      folder:   '/mahagen-co'
    });
    res.json({ url: result.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;
