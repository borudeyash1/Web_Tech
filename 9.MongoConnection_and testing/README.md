# 9.MongoConnection_and testing

This demo shows an Express server using Mongoose to store students in MongoDB (default local URI: `mongodb://localhost:27017/studentsdb`).

Prereqs

- Node.js (14+)
- MongoDB running locally on port 27017 (or set `MONGO_URI` to your MongoDB URI)

Get started

```powershell
cd "d:\Web_Tech\9.MongoConnection_and testing"
npm install
# seed the DB (creates sample students)
npm run seed
# start server
npm start
# open http://localhost:3001 in your browser
```

Notes

- The server listens on port 3001 by default. It uses environment variable `MONGO_URI` if you want to connect to a remote Mongo.
- If Mongo is not running locally, start it (e.g. `mongod --dbpath "C:\data\db" --port 27017`) or use a cloud MongoDB and set `MONGO_URI`.

Postman

- Import the bundled Postman collection `postman_students_collection.json` (File > Import in Postman).
- After importing, set the collection variable `baseUrl` to `http://localhost:3001` (or your server URL).
- Use the `Create student` request to add a student, copy the returned `_id` into the `studentId` variable, then test `Get student by id`, `Update student`, and `Delete student`.
