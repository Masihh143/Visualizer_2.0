import express from 'express';
import axios from 'axios';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Enable CORS for frontend
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

// Use express.json() to parse JSON requests
app.use(express.json());

// Manually define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the directory and file path for storing data
const dataDir = path.join(__dirname, 'data');
const filePath = path.join(dataDir, 'nasa_data.json');

// Ensure the directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Function to fetch and save data locally
const fetchAndSaveData = async () => {
  try {
    console.log('Fetching data from NASA API...');
    const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/');
    const data = response.data;

    // Write JSON data to a file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log('✅ NASA data saved successfully!');
  } catch (error) {
    console.error('❌ Error fetching NASA data:', error);
  }
};

// Fetch and save data when the server starts
fetchAndSaveData();

// Route to serve stored NASA data
app.get('/api/nasa', (req, res) => {
  if (fs.existsSync(filePath)) {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    res.json(JSON.parse(jsonData));
  } else {
    res.status(500).json({ error: 'NASA data file not found' });
  }
});

// Test route to confirm the server is working
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running properly!' });
});

// Serve frontend files
app.use(express.static('frontend'));
app.use('/modules', express.static(path.join(__dirname, 'node_modules')));

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
