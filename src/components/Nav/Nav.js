import { Dropdown } from "./Dropdown/Dropdown.js";
import { Button } from "./Button/Button.js";
import styles from "./Nav.module.css";

export function Nav({ editorRef: { current: editorRef } }) {
    return (
        <nav className={styles.nav}>
            <Dropdown title="File">
                <Button onClick={() => alert(editorRef.getValue())}>Export File</Button>
                <Button>Settings</Button>
            </Dropdown>
            <Dropdown title="Edit">
                <Button>AOC Inputs</Button>
                <Button>Puzzle Day Info</Button>
                <Button>Zen Mode</Button>
            </Dropdown>
            <Dropdown title="Window">
                <Button>Submitted Responses</Button>
                <Button>AOC Inputs</Button>
                <Button>Cheatsheet</Button>
                <Button>Lib Docs</Button>
            </Dropdown>
            <Dropdown title="Help">
                <Button>Lib Docs</Button>
                <Button>Cheatsheet</Button>
                <Button>About</Button>
            </Dropdown>
        </nav>
    );
}