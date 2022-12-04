import React from "react";
import classes from './TopBar.module.css';

const TopBar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="Amazon Logo" />
            </nav>
        </header>

    );
}

export default TopBar;