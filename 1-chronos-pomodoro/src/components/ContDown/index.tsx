import { useContext } from 'react';
import styles from './styles.module.scss';
import { TaskContext } from '../../contexts/TaskContext';

export function ContDown() {
    const taskContext = useContext(TaskContext);

    console.log(taskContext);
    return <div className={styles.contdown}>00:00</div>;
}
