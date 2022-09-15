import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
const theme = createTheme()

function Register() {
  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [validEmail, setValidEmail] = React.useState('')
  const [valiSurname, setValidSurname] = React.useState('')
  const [validPassword, setValidPassword] = React.useState('')
  const [validName, setValidName] = React.useState('')

  // React.useEffect(() => {

  // }, [name, surname, email, password]);

  function submitRegister() {
    if (
      validEmail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setEmail(validEmail)
      setSurname(valiSurname)
      setName(validName)
      setPassword(validPassword)

      axios
        .post('http://localhost:8080/register', {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          data: {
            name: name,
            email: email,
            password: password,
          },
        })
        .then((res) => console.log(res))

      console.log(name, surname, email, password)
    } else {
      alert('Email is not valid')
      return
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form style={formStyle}>
            <CssBaseline />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              style={{ marginBottom: '13px' }}
              onChange={(e) => setValidName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              required
              style={{ marginBottom: '13px' }}
              onChange={(e) => setValidSurname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              required
              style={{ marginBottom: '13px' }}
              onChange={(e) => setValidEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              required
              style={{ marginBottom: '13px' }}
              onChange={(e) => setValidPassword(e.target.value)}
            />
            <Button variant="contained" type="button" onClick={submitRegister}>
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export { Register }

//         style

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '13px',
  borderRadius: '13%',
  width: '400px',
}
