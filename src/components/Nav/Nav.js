import { Dropdown } from "./Dropdown/Dropdown.js";
import { Button } from "./Button/Button.js";
import styles from "./Nav.module.css";

export function Nav() {
    return (
        <nav className={styles.nav}>
            <Dropdown title="File">
                <Button>Export File</Button>
                <Button>Settings</Button>
            </Dropdown>
            <Dropdown title="Edit">
                <Button>AOC Input</Button>
                <Button>Zen Mode</Button>
            </Dropdown>
            <Button>Run</Button>
            <Dropdown title="Help">
                <Button>Lib Docs</Button>
                <Button>Cheatsheet</Button>
                <Button>About</Button>
            </Dropdown>
        </nav>
    );
}