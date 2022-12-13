import styles from "./Modal.module.css";

// todo: resizeable, draggable
export function Modal({ title, children, closeModal, ...props }) {
    return (
        <div className={styles.cont}>
            <div className={styles.topNav}>
                <div className={styles.windowTitle}>
                    {title}
                </div>
                <div className={styles.close} onClick={closeModal}>&times;</div>
            </div>
            <div {...props}>
                {children}
            </div>
        </div>
    );
}