/*Write code using Node.js and Express.js to create a back-end server. 
Create basic routes to serve static files and JSON data, then extend it to 
include a RESTful API with GET, POST, PUT, and DELETE operations 
for a student data object. Test all routes using Postman.
the student details are sotred in ./students.json in form of 
 */ 

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from this directory
app.use(express.static(__dirname));

// Helpers
function readStudents(cb) {
  fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
    if (err) return cb(err);
    try {
      const students = JSON.parse(data || '[]');
      cb(null, students);
    } catch (e) {
      cb(e);
    }
  });
}

function writeStudents(students, cb) {
  fs.writeFile(path.join(__dirname, 'students.json'), JSON.stringify(students, null, 2), 'utf8', cb);
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// RESTful API
app.get('/students', (req, res) => {
  readStudents((err, students) => {
    if (err) return res.status(500).send('Error reading student data');
    res.json(students);
  });
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  readStudents((err, students) => {
    if (err) return res.status(500).send('Error reading student data');
    const student = students.find(s => s.id === id);
    if (student) res.json(student);
    else res.status(404).send('Student not found');
  });
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  if (!newStudent || !newStudent.name) return res.status(400).send('Invalid student data');
  readStudents((err, students) => {
    if (err) return res.status(500).send('Error reading student data');
    const maxId = students.reduce((m, s) => Math.max(m, s.id || 0), 0);
    const student = {
      id: (newStudent.id && Number(newStudent.id)) || maxId + 1,
      name: String(newStudent.name),
      age: newStudent.age ? Number(newStudent.age) : null,
      major: newStudent.major ? String(newStudent.major) : ''
    };
    students.push(student);
    writeStudents(students, (err) => {
      if (err) return res.status(500).send('Error saving student data');
      res.status(201).json(student);
    });
  });
});

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updated = req.body;
  readStudents((err, students) => {
    if (err) return res.status(500).send('Error reading student data');
    const idx = students.findIndex(s => s.id === id);
    if (idx === -1) return res.status(404).send('Student not found');
    students[idx] = { id, name: updated.name || students[idx].name, age: updated.age || students[idx].age, major: updated.major || students[idx].major };
    writeStudents(students, (err) => {
      if (err) return res.status(500).send('Error saving student data');
      res.json(students[idx]);
    });
  });
});

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  readStudents((err, students) => {
    if (err) return res.status(500).send('Error reading student data');
    const idx = students.findIndex(s => s.id === id);
    if (idx === -1) return res.status(404).send('Student not found');
    const removed = students.splice(idx, 1)[0];
    writeStudents(students, (err) => {
      if (err) return res.status(500).send('Error saving student data');
      res.json(removed);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
