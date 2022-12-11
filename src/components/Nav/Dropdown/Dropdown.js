import styles from "./Dropdown.module.css";
import buttonStyles from "../Button/Button.module.css";

export function Dropdown({ children = [], title }) {
    return (
        <>
            <div className={styles.cont}>
                <div className={buttonStyles.button}>{title}</div>
                <div className={styles.dropdown}>
                    {children}
                </div>
            </div>
        </>
    );
}