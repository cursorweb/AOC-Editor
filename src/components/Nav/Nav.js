import { Dropdown } from "./Dropdown/Dropdown.js";
import styles from "./Nav.module.css";

export function Nav() {
    return (
        <nav className={styles.nav}>
            <Dropdown title="File">
                <div>Export File</div>
                <div>Settings</div>
            </Dropdown>
            <Dropdown title="Edit" className={styles.button}>
                <div>AOC Input</div>
                <div>Zen Mode</div>
            </Dropdown>
            <Dropdown title="Run" className={styles.button}>

            </Dropdown>
            <Dropdown title="Help" className={styles.button}>
                <div>Lib Docs</div>
                <div>Cheatsheet</div>
                <div>About</div>
            </Dropdown>
        </nav>
    );
}