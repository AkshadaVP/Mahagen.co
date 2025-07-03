// routes/formRoutes.js
import { Router } from 'express';
import FormData   from '../models/FormData.js';

const router = Router();

// POST /api/formdata
router.post('/', async (req, res) => {
  try {
    const sub = await FormData.create(req.body);
    res.status(201).json({ message: 'OK', id: sub._id });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// GET all (admin)
router.get('/', async (req, res) => {
  try {
    const list = await FormData.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// GET by email
router.get('/:email', async (req, res) => {
  try {
    const doc = await FormData.findOne({ email: req.params.email });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// PUT status
router.put('/:id', async (req, res) => {
  try {
    const doc = await FormData.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    doc.status = req.body.status;
    await doc.save();
    res.json({ message: 'Updated', status: doc.status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Update failed' });
  }
});

export default router;
