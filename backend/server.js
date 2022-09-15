const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const users = [
  {
    id: 1,
    name: 'Rashad',
    surname: 'Xalilov',
    email: 'rashadmkh@code.edu.az',
    password: 'rashad123',
  },
]
class User {
  constructor(name, surname, email, password, confirmPassword) {
    ;(this.name = name), (this.surname = surname), (this.email = email)
    confirmPassword(confirmPassword, password)
  }
  confirmEmail(email) {
    if (users.any((x) => x.email === email)) {
      this.email = email
      return
    }
    alert('Email alreay exist !')
  }
  confirmPassword(password, confirmPassword) {
    if (confirmPassword === password) {
      this.password = password
    }
  }
}
app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.resolve('assets')))
app.get('/', (req, res) => {
  res.send(users)
})
app.post('/login', (req, res) => {
  console.log(res)
})
app.listen(8080, () => {
  console.log('Server running on 8080')
})
