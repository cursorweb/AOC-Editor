import { Dropdown } from "./Dropdown/Dropdown.js";
import { Button } from "./Button/Button.js";
import styles from "./Nav.module.css";
import { Modal } from "../Modal/Modal.js";

export function Nav({ editorRef: { current: editorRef }, setModal }) {
    return (
        <nav className={styles.nav}>
            <Dropdown title="File">
                <Button onClick={() => alert(editorRef.getValue())}>Export File</Button>
                <Button onClick={() => {
                    setModal(<Modal title={"test"}>
                        Lol easy
                    </Modal>);
                }}>Settings</Button>
            </Dropdown>
            <Dropdown title="Edit">
                <Button>AOC Inputs</Button>
                <Button>Puzzle Day Info</Button>
                <Button>Zen Mode</Button>
            </Dropdown>
            <Dropdown title="Window">
                <Button>AOC Inputs</Button>
                <Button>Cheatsheet</Button>
                <Button>Code Editor</Button>
                <Button>Console</Button>
                <Button>Lib Docs</Button>
                <Button>Puzzle Viewer</Button>
                <Button>Submitted Responses</Button>
            </Dropdown>
            <Dropdown title="Help">
                <Button>About</Button>
                <Button>Cheatsheet</Button>
                <Button>Lib Docs</Button>
            </Dropdown>
        </nav>
    );
}