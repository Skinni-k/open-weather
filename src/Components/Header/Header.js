import React from 'react'
import { Link } from "react-router-dom";
import styles from "./header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <Link className={styles.Link} to="/" exact="true">
                <h1>Weather Forecast</h1>
            </Link>
        </div>
    )
}

export default Header;