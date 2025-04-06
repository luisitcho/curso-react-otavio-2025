import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.scss';

export function ContDown() {
    const { state } = useTaskContext();

    return <div className={styles.contdown}>{state.formattedSecondsRemaining}</div>;
}
