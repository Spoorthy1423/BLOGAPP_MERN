import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username || !email || !password || username === '' || email === '' || password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
//hashedpassword is the text which is shown in our database as when we send our data in database then people who have the access to database can easily access it, hashedpassword will benefit us in showing some other random text
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};