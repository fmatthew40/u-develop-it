const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001; 
const app = express(); 
// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQl password
        password: 'mysql123456',
        database: 'election'
    },
    console.log('Connected to the election database!')
);



// app.get('/', (req, res) => {
//     res.json({ 
//         message: 'Hello World!'
//     });
// });

// Default response for any other request (NOT FOUND) - Needs to be here or will override other functions
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});