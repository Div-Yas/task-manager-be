require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
console.log('JWT_SECRET:', process.env.JWT_SECRET); // Add this line for debugging

// connect to mongo
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/taskmanager';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// routes
app.use('/auth', require('./routes/auth'));
app.use('/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));