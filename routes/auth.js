
const User    = require('../models/User'),
 			bcrypt  = require('bcrypt');

const express = require('express');
const router  = express.Router();

/* REGISTRO USUARIO */
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
  }

  try {
    const userExists = await User.findOne({ email });
    
		if (userExists) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});


/* LOGIN USUARIO */

router.get('/login', async (req, res) => {

	const { email, password } = req.body;

	if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
  }

	try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', email: user.email });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }

})


module.exports = router;