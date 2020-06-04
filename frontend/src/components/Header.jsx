import React from "react";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header = () => {
    return <div className={styles.header}>
<div className={styles.middle}>

    <div className={styles.item}>
        <NavLink to="/clients">Клиенты</NavLink>
    </div>

    <div className={styles.item}>
        <NavLink to="/tickets">Заявки</NavLink>
    </div>

    <div className={styles.item}>
        <NavLink to="/services">Услуги</NavLink>
    </div>

</div>
    </div>
}
export default Header;