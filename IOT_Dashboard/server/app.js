// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Create an instance of Express
const app = express();

app.use(cors());

// Connect to the local MongoDB database
mongoose.connect('mongodb://localhost/IOT_Data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check the connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});

// Define a simple route
app.get('/api/team1', async (req, res) => {
  try {
      // Replace 'your-collection-name' with the actual name of your collection
      const collection = db.collection('team1');

      // Fetch data from the collection
      const data = await collection.find().toArray();
      
      res.json(data);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define a simple route
app.get('/api/team2', async (req, res) => {
  try {
      // Replace 'your-collection-name' with the actual name of your collection
      const collection = db.collection('team2');

      // Fetch data from the collection
      const data = await collection.find().toArray();
      

      res.json(data);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define a simple route
app.get('/api/team3', async (req, res) => {
  try {
      // Replace 'your-collection-name' with the actual name of your collection
      const collection = db.collection('team3');

      // Fetch data from the collection
      const data = await collection.find().toArray();
      
      console.log(data);

      res.json(data);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define a simple route
app.get('/api/team4', async (req, res) => {
  try {
      // Replace 'your-collection-name' with the actual name of your collection
      const collection = db.collection('team4');

      // Fetch data from the collection
      const data = await collection.find().toArray();
      
      console.log(data);

      res.json(data);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/team5', async (req, res) => {
    try {
        // Replace 'your-collection-name' with the actual name of your collection
        const collection = db.collection('team5');
  
        // Fetch data from the collection
        const data = await collection.find().toArray();
        
        console.log(data);
  
        res.json(data);
      } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  });

// Set the server to listen on a specific port
const port = 5124;
app.listen(port, () => console.log(`Server is running on port ${port}`));
