import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('Hello from NodeJS Backend!'));
app.listen(5000, () => console.log('Server running on port 5000'));
