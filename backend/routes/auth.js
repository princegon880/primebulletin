const express = require('express');
const User = require('../models/User');
const router = express.Router(); // Create a new router object
const { body, validationResult } = require('express-validator');   
const bcrypt = require('bcryptjs'); 
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser'); // Middleware to fetch user from JWT token

const JWT_SECRET = 'Prince@patel'   //JWT secret key    

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    ], async (req, res) => {
    let success = false;

    // if there are errors, return bad request and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    //check if user with same email exists
    try{
    let user = await User.findOne({ email: req.body.email })
    console.log(user)
    if (user) {
        return res.status(400).json({ success, error: 'Sorry a user with this email already exists' })
    }
    //create a new user
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    });

    const data = {
        user: {
            id: user.id
        }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);
    // consol.log(jwtData)
    // .then(user => res.json(user))
    // .catch(err=>{comsole.log(err)
    //     res.json({error: 'Please enter a unique value for email', message: err.message})})
 
    // console.log(req.body)
    // const user = User(req.body)
    // user.save()
    // res.send(req.body);
    let success = true;
    res.json({success,authtoken});}
    //catch error and send 500 status code
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }   
})

// Route 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
  
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  
  });
  
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
module.exports = router