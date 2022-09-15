import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const theme = createTheme();

function Register(){
    const [name, setName] = React.useState('')
    const [surname, setSurname] = React.useState('')
    const [email, setEmail] = React.useState('')

    function submitRegister(){
        if(!email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            {
                return;
            }
        
    }

    return(
        <form style={formStyle}>
            <CssBaseline />
            <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                required style = {{marginBottom: '13px'}} 
                onChange={(e) => setName(e.target.value)} 
            />
            <TextField 
                id="outlined-basic" 
                label="Surname" 
                variant="outlined" 
                required style = {{marginBottom: '13px'}}
                onChange={(e) => setSurname(e.target.value)} 
            />
            <TextField 
                id="outlined-basic" 
                label="E-mail" 
                variant="outlined" 
                required style = {{marginBottom: '13px'}}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <Button variant="contained" type='button' onClick={submitRegister}>Register</Button>
        </form>
    )
}

export {Register}

//         style

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '13px',
    borderRadius: '13%',
    width: '400px'
}