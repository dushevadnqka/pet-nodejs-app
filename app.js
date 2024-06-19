const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Get all pets
app.get('/pets', async (req, res) => {
    try {
        // Call google.com to prepare a list of pets
        const response = await axios.get('https://www.google.com');
        // Process the response and prepare the list of pets
        // const pets = ['Dog', 'Cat', 'Bird'];
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get pets' });
    }
});

// Create a new pet
app.post('/pets', (req, res) => {
    // Logic to create a new pet
    res.json({ message: 'New pet created' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
