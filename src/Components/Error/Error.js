import React, { useEffect, useState } from 'react';
import styles from "./error.module.css"
import { Link, Redirect } from "react-router-dom";

const Error = () => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            setRedirect(true);
          }, 5000);
        return () => clearTimeout(interval);
    }, []);

    const handleLeak = () => {
        setRedirect(true);
    }

    return (
        <>
        {redirect ?
        <Redirect to="/" />:
        <div>
           <h1 className={styles.errorTitle}>404: Page Not Found</h1> 
           <Link className={styles.Link} exact="true" onClick={handleLeak} to="/"> Click Here to Go back to Homepage</Link>
        </div> }
        </>
    )
}

export default Error