const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error(error);
  });

// Création du modèle User
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

// Création d'un utilisateur
const user = new User({
  email: 'example@gmail.com',
  password: 'password'
});

user.save().then(() => {
  console.log('User created');
}).catch((error) => {
  console.error(error);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
