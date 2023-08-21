var User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



exports.reg = async (req, res) => {
    console.log(req.body)
    try {
        const { email,username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser =  User({email, username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
      } 
      catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error registering user' });
      }
  };
  exports.login = async (req,res)=>{
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h', // Token expiration time
        });
        res.json({ token });
      } catch (err) {
        res.status(500).json({ error: 'Error logging in' });
      }
  }