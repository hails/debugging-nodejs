const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controllers/user')

const app = express()

app.use(bodyParser.json())

app.get(
  '/api/users',
  userController.index
)

app.get(
  '/api/users/:user_id',
  userController.get
)

app.post(
  '/api/users',
  userController.create
)

app.listen(3000, () => {
  console.log(`Server ready and listening on port 3000`)
})
