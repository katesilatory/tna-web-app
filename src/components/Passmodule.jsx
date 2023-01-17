import styles from "./Pass.module.css";
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


export const Passmodule = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h3>Reset Password</h3>
                <Stack direction="column" spacing={2}>
                <TextField className={styles.textfield} id="outlined-basic" label="Username" variant="outlined" />
                <FormControl sx={{width: '80vh' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
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
                    label="New Password"/>
                </FormControl>
                <Stack direction="column" spacing={2}>
                <a href="/"><button className={styles.done}>Done</button></a>
                <a href="/"><button className={styles.cancel}>Cancel</button></a>
                <br/>
                <br/>
                </Stack>
                </Stack>
            </div>
        </div>
    );
  }
