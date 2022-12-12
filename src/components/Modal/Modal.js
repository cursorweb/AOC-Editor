import styles from "./Modal.module.css";

// todo: resizeable, draggable
export function Modal({ title, children, ...props }) {
    return (
        <div className={styles.cont}>
            <div className={styles.topNav}>
                <div>
                    {title}
                </div>
                <div>&times;</div>
            </div>
            <div {...props}>
                {children}
            </div>
        </div>
    );
}