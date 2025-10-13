const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentsdb';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Mongoose model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  major: String
});
const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find().lean();
    res.json(students);
  } catch (err) {
    res.status(500).send('Error reading students');
  }
});

app.get('/students/:id', async (req, res) => {
  try {
    const s = await Student.findById(req.params.id).lean();
    if (!s) return res.status(404).send('Student not found');
    res.json(s);
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.post('/students', async (req, res) => {
  try {
    const s = new Student(req.body);
    await s.save();
    res.status(201).json(s);
  } catch (err) {
    res.status(400).send('Invalid data');
  }
});
//i want to test the apis on postman 


app.put('/students/:id', async (req, res) => {
  try {
    const s = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
    if (!s) return res.status(404).send('Student not found');
    res.json(s);
  } catch (err) {
    res.status(400).send('Error updating');
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    const s = await Student.findByIdAndDelete(req.params.id).lean();
    if (!s) return res.status(404).send('Student not found');
    res.json(s);
  } catch (err) {
    res.status(500).send('Error deleting');
  }
});

// Connect to Mongo and start server
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error:', err.message);
  });
