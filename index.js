const express = require('express');

const app = new express();
const port = 3000;

app.listen(port, () => {
    console.log("Server running on port:", port);
})