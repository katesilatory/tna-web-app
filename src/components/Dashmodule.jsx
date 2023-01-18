import styles from "./Dash.module.css";
import { Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';


export const Dashmodule = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="./images/logo.png" alt="logo" className={styles.img}/>
                <h3 className={styles.info} >Date / Time</h3>
            </div>
            <div className={styles.card}>
                <img src="./images/logo.png" alt="logo" className={styles.img}/>
                <h3 className={styles.info} >Date / Time</h3>
            </div>
        </div>
    );
  }
