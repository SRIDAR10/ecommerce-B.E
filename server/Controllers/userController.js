const User = require("../Models/User");
const bcrypt = require("bcrypt");

/**
 * @route POST /register
 * @desc Registers a user
 * @api public
 */
const registerUser = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10), // Await the hash function
    };

    // Check if the user is already registered.
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Create User
    const newUser = await User.create(user);

    res.status(201).json({
      message: "Registration successful",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

/**
 * @route POST /login
 * @desc logs in a user
 * @api public
 */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // Check if the provided password matches the stored password
    const passwordMatch = await bcrypt.compare(password, user.password); // Await the compare function

    if (passwordMatch) {
      return res.status(200).json({
        message: "Login successful",
        user: {
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({
        message: "Email or password incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
