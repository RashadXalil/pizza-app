const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const users = [
  {
    id: 1,
    name: 'Rashad',
    email: 'rashadmkh@code.edu.az',
    password: 'rashad123',
    isLogined: false,
  },
]
class User {
  constructor(name, email, password) {
    ;(this.name = name), (this.email = email), (this.password = password)
  }
  confirmEmail(email) {
    if (users.any((x) => x.email === email)) {
      this.email = email
      return
    }
    alert('Email alreay exist !')
  }
}
app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.resolve('assets')))
app.get('/', (req, res) => {
  res.send(users)
})
app.post('/login', (req, res) => {
  console.log(req.body)
  if (
    users.any(
      (x) => x.email === req.body.email && x.password === req.body.password,
    )
  ) {
    res.send('logined')
  }
})
app.post('/register', (req, res) => {
  console.log(req.body.data)
  let name = req.body.data.name
  let email = req.body.data.email
  let password = req.body.data.password
  let user = new User(name, email, password)
  users.push(user)
  res.sendStatus(200)
})
app.listen(8080, () => {
  console.log('Server running on 8080')
})
