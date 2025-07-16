const { MongoClient } = require("mongodb");
    const url = "mongodb://localhost:27017";
    const dbName = "yash";

    (async () => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            console.log("Connected to MongoDB");
            const db = client.db(dbName);
            const collection = db.collection("appointments");

            // Appointment form submission
            document.getElementById('appointmentForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                this.classList.add('was-validated');
                if (this.checkValidity()) {
                    const formData = new FormData(this);
                    const data = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        service: formData.get('service'),
                        date: formData.get('date'),
                        message: formData.get('message')
                    };
                    await collection.insertOne(data);
                    this.reset();
                    document.getElementById('appointmentSuccess').classList.remove('d-none');
                    setTimeout(() => {
                        document.getElementById('appointmentSuccess').classList.add('d-none');
                    }, 4000);
                }
            });
        } catch (err) {
            console.log("Error connecting to MongoDB:", err);
        } finally {
            await client.close();
        }
    })();
