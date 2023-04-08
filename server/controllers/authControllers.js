const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Fonction pour enregistrer un nouvel utilisateur
const register = async (req, res) => {
  try {
    // Hash du mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    // Création d'un nouvel utilisateur avec les données du corps de la requête
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    
    // Enregistrement de l'utilisateur dans la base de données
    await user.save();
    
    res.status(201).json({ message: 'User created successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fonction pour connecter un utilisateur existant
const login = async (req, res) => {
  try {
    // Recherche de l'utilisateur dans la base de données par email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed.' });
    }
    
    // Comparaison du mot de passe entré avec le mot de passe enregistré dans la base de données
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed.' });
    }
    
    // Création d'un jeton JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };