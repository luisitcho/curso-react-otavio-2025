import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.scss';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks } from '../../utils/sortTasks';

export function History() {
    const { state } = useTaskContext();
    const sortedTasks = sortTasks({ tasks: state.tasks });

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span>
                        <DefaultButton
                            icon={<TrashIcon />}
                            color='red'
                            aria-label='Apagar todo o histórico'
                            title='Apagar o histórico'
                        />
                    </span>
                </Heading>
            </Container>

            <Container className={styles.history}>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortedTasks.map(task => {
                                const taskTypeDictionary = {
                                    workTime: 'Foco',
                                    shortBreakTime: 'Descanso Curto',
                                    longBreakTime: 'Descanso Longo',
                                };

                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}min</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{taskTypeDictionary[task.type]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}
