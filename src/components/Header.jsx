import styles from "./Header.module.css";
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    return (
    <div className={styles.container}>
      <div>
        {/* <a><img className={styles.logo} src="./images/coet.jpg" alt="logo"/></a> */}
      </div>
      <div>
        <a href="/" className={styles.buttontext} ><button className={styles.primary}>Logout &nbsp;<LogoutIcon sx={{ fontSize: 20 }} /></button></a>
      </div>
    </div>
    )
}