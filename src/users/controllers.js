const User = require("./model")
const jwt = require("jsonwebtoken")

//    req = request, res = response
const registerUser = async (req, res) => {

    console.log("Next called and now inside controller registerUser")

    try {
        const user = await User.create ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        })

        // const user = await User.create(req.body)

        res.status(201).json({
            message: "Successfully registered",
            user: {username: req.body.username, email:req.body.email}
        })
        
    } catch (error) {
        res.status(501).json({errorMessage:error.message, error:error})
        
    }
}

const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      // remove passwords from users object
      for (let user of users) {
        user.password = "";
      }

      res.status(200).json({ message: "success", users: users });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
};

const login = async (req, res) => {
    try {
        const token = await jwt.sign({id: req.user.id}, process.env.SECRET)
        res.status(200).json ({
            message: "success",
            user: {
                username: req.body.username,
                email: req.body.email,
                token: token
            }
        })
        
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
        
    }
}

module.exports = {
    registerUser,
    getAllUsers,
    login
}