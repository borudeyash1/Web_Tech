const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentsdb';

const studentSchema = new mongoose.Schema({ name: String, age: Number, major: String });
const Student = mongoose.model('Student', studentSchema);

async function seed() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB for seeding');
  await Student.deleteMany({});
  const students = [
    { name: 'Alice', age: 20, major: 'Computer Science' },
    { name: 'Bob', age: 22, major: 'Mathematics' },
    { name: 'Charlie', age: 21, major: 'Physics' }
  ];
  await Student.insertMany(students);
  console.log('Seeded students');
  mongoose.disconnect();
}

seed().catch(err => console.error(err));
