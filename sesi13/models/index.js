const route = require("express").Router()
const jwt = require("jsonwebtoken")
const { User } = require("../models")
const UserController = require("../controllers/userController")
const bcrypt = require("bcryptjs")

// Routes
// ctrl/cmd + D
route.get("/", (req, res) => {
  res.json({
    page: "Home",
  })
})
// new Date("") -> Timestamp Object di JS

route.post("/login", (req, res) => {
  /**
   * get where email/name & password
   */
  User.findOne({
    where: {
      name: req.body.name, // Karena ga ada email
      // password: req.body.password
    }
  })
  .then(data => {
    console.log(data)
    // Jika gagal login
    if(data === null) {
      res.status(401).json({ message: "Name or password invalid" })
    } else { // jika sukses
      let compare = bcrypt.compareSync(req.body.password, data.password);
      if(compare === true) {
        let token = jwt.sign(data.dataValues, 'kode rahasia');
        res.status(200).json({ token: token })
      } else {
        res.status(401).json({ message: "Name or password invalid" })
      }
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

route.post("/users", UserController.create)


// Users resource
// authenticate - middleware
route.use(function (req, res, next) {
  console.log(req.headers.token)
  try {
    let decoded = jwt.verify(req.headers.token, 'kode rahasia');
    console.log(decoded)
    User.findOne({
      where: {
        name: decoded.name
      }
    })
    .then(data => {
      if(data !== null) {
        next()
      } else {
        res.status(401).json({ message: "User not registered" })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
  } catch(err) {
    console.log("Masuk catch dari try")
    res.status(500).json(err)
  }
})
route.get("/users", UserController.findAll)
// authenticate
route.get("/users/:id", UserController.findOne)
route.post("/users/:id/edit", UserController.edit)
route.post("/users/:id/delete", UserController.delete)

module.exports = route