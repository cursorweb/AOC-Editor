import styles from "./Dropdown.module.css";

export function Dropdown({ children = [], title }) {
    return (
        <>
            <div className={styles.cont}>
                <div className={styles.titleButton}>{title}</div>
                <div className={styles.dropdown}>
                    {children}
                </div>
            </div>
        </>
    );
}