const express = require('express')
const app = express()
const port = 3000

const { User } = require("./models")

app.use(express.urlencoded({extended : true}))

app.get("/users", (req, res) => {
  User.findAll({
  })
    .then(data => {
      // console.log(data)
      res.json(data)
    })
    .catch(err => {
      console.log(err)
    })
  // promise
})

app.post("/users", (req, res) => {
    const users = User.create({ firstName: req.body.firstName, lastName: req.body.lastName,email:req.body.email,createdAt: new Date(), updatedAt: new Date() });
    res.json({
        "message":"suksess data create",
    });
    // promise
  })

  app.get("/users/:id",async(req,res)=>{
      let data = await User.findOne({
          where: {
              id: parseInt(req.params.id)
          }
      });

      res.json({
          data
      })
  })

app.listen(port, () => {
  console.log("Listening on port:", port)
})