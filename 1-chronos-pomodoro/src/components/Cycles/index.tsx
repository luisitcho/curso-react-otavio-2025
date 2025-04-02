import styles from './styles.module.scss';

export function Cycles() {
    return (
        <div
            className={`${styles.cycles} flex justify-center items-center flex-col gap-3`}
        >
            <span>Ciclos:</span>
            <div className={`${styles.cycles__dots} flex gap-2`}>
                <span className={`${styles.item} ${styles.item__workTime}`}></span>
                <span className={`${styles.item} ${styles.item__shortBreakTime}`}></span>
                <span className={`${styles.item} ${styles.item__workTime}`}></span>
                <span className={`${styles.item} ${styles.item__shortBreakTime}`}></span>
                <span className={`${styles.item} ${styles.item__workTime}`}></span>
                <span className={`${styles.item} ${styles.item__shortBreakTime}`}></span>
                <span className={`${styles.item} ${styles.item__workTime}`}></span>
                <span className={`${styles.item} ${styles.item__longBreakTime}`}></span>
            </div>
        </div>
    );
}
