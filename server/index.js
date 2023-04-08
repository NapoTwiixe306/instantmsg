// const express = require('express');
// const mongoose = require('mongoose');
// require ('dotenv').config()

// const app = express();
// const port = process.env.PORT || 3000;

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('Connected to MongoDB');
//   }).catch((error) => {
//     console.error(error);
//   });

// // Création du modèle User
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// const User = mongoose.model('User', userSchema);

// // Création d'un utilisateur
// const user = new User({
//   email: 'example@gmail.com',
//   password: 'password'
// });

// user.save().then(() => {
//   console.log('User created');
// }).catch((error) => {
//   console.error(error);
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require ('dotenv').config()



// Création de l'application Express
const app = express();

// Middleware pour autoriser les requêtes depuis n'importe quel domaine
app.use(cors());

// Middleware pour analyser les données du corps de la requête en JSON
app.use(bodyParser.json());

// Middleware pour gérer les routes d'authentification
app.use('/auth', authRoutes);

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  const error = new Error('Not found.');
  error.status = 404;
  next(error);
});

// Middleware pour gérer les erreurs
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
  next();
});

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error(error);
  });
// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
