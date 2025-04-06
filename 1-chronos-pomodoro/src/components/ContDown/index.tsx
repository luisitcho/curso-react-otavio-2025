import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.scss';

export function ContDown() {
    const taskContext = useTaskContext();

    console.log(taskContext);
    return <div className={styles.contdown}>00:00</div>;
}
