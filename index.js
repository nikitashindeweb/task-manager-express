const express = require('express');
const tasks = require('./routes/tasks');
const app = new express();
const port = 3000;

app.use(express.json()); // convert request data into json

// Task routes
app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
    console.log("Server running on port:", port);
})