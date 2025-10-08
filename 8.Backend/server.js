/*Write code using Node.js and Express.js to create a back-end server. 
Create basic routes to serve static files and JSON data, then extend it to 
include a RESTful API with GET, POST, PUT, and DELETE operations 
for a student data object. Test all routes using Postman.
the student details are sotred in ./students.json in form of 
 */ 

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

app.get('/students', (req, res) => {
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 
// RESTful API for student data
const getStudents = (req, res) => {
  fs.readFile('./students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
    } else {
      res.json(JSON.parse(data));
    }
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
    } else {
      const students = JSON.parse(data);
      const student = students.find(s => s.id === id);
      if (student) {
        res.json(student);
      } else {
        res.status(404).send('Student not found');
      }
    }
  });
};

const addStudent = (req, res) => {
  const newStudent = req.body;
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
    } else {
      const students = JSON.parse(data);
      students.push(newStudent);
      fs.writeFile('students.json', JSON.stringify(students), err => {
        if (err) {
          console.error(err);
          res.status(500).send('Error saving student data');
        } else {
          res.status(201).send('Student added successfully');
        }
      });
    }
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedStudent = req.body;  
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
    } else {
      const students = JSON.parse(data);
      const studentIndex = students.findIndex(s => s.id === id);
      if (studentIndex !== -1) {
        students[studentIndex] = updatedStudent;
        fs.writeFile('students.json', JSON.stringify(students), err => {
          if (err) {
            console.error(err);
            res.status(500).send('Error saving student data');
          } else {
            res.status(200).send('Student updated successfully');
          }
        });
      } else {
        res.status(404).send('Student not found');
      }
    }
  });   
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading student data');
    } else {
      const students = JSON.parse(data);
      const studentIndex = students.findIndex(s => s.id === id);
      if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        fs.writeFile('students.json', JSON.stringify(students), err => {
          if (err) {
            console.error(err);
            res.status(500).send('Error saving student data');
          } else {
            res.status(200).send('Student deleted successfully');
          }
        });
      } else {
        res.status(404).send('Student not found');
      }
    }
  });
};  
