import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Loginmodule = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div className={styles.contain}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Login</h2>
                    <Stack direction="column" spacing={2}>
                    <TextField className={styles.textfield} id="outlined-basic" label="Username" variant="outlined" />
                    <FormControl sx={{ m: 2, width: '65.5vh' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"/>
                    </FormControl>
                    <Stack direction="column" spacing={2}>
                    <a href="/dashboard"><button className={styles.logbutton}>LOGIN</button></a>
                    <a href="/signup"><button className={styles.signbutton}>SIGN UP</button></a>
                    <Link to='/password' className={styles.forgot}>Forgot Password?</Link> 
                    <br/>
                    <br/>
                    </Stack>
                    </Stack>
                </div>
                <div className={styles.text}>
                    <p>Bachelor of <br/>Engineering <br/>Technology - </p>
                    <p className={styles.green}>Computer<br/>Engineering <br/>Technology</p>
                </div>
            </div>
        </div>    
    );
  }
