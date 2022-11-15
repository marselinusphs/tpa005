const Users = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const saltRounds = await bcrypt.genSalt(10);
      const hasPassword = await bcrypt.hash(password, saltRounds);

      const newDataRegister = {
        username,
        email,
        password: hasPassword,
      };

      const users = await Users.create(newDataRegister);
      console.log(users);
      res.status(201).json({
        message: "Register success",
        data: users,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  login: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const users = await User.findOne(email, username);
      if (!users) {
        return res.status(404).json({
          message: "user not found",
        });
      }

      // comparing password
      const hasPassword = await bcrypt.compare(password);

      // if to check a password
      if (!hasPassword) {
        return res.status(401).json({
          message: "Password is incorrect",
        });
      }

      // signing token with user email
      const token = jwt.sign(email, process.env.TOKEN_SECRET, {
        expiresIn: "60s",
      });

      // responding to client request with user success message and access token.
      res.status(200).json({
        message: "Login Successfully",
        accessToken: token,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
