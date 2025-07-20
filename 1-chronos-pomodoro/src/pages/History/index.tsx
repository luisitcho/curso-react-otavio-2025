import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.scss';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { useState } from 'react';

import arrow from '../../../public/images/bottom-arrow.svg';

export function History() {
    const { state } = useTaskContext();
    const sortedTasks = sortTasks({ tasks: state.tasks });
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: 'startDate',
            direction: 'desc',
        };
    });

    function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
        const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

        setSortTasksOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            direction: newDirection,
            field,
        });
    }

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
                                <th
                                    onClick={() => handleSortTasks({ field: 'name' })}
                                    className={styles.order}
                                >
                                    <div>
                                        Tarefa
                                        <img src={arrow} alt='Ordenação por nome' />
                                    </div>
                                </th>
                                <th
                                    onClick={() => handleSortTasks({ field: 'duration' })}
                                    className={styles.order}
                                >
                                    <div>
                                        Duração
                                        <img src={arrow} alt='Ordenação por duração' />
                                    </div>
                                </th>
                                <th
                                    onClick={() =>
                                        handleSortTasks({ field: 'startDate' })
                                    }
                                    className={styles.order}
                                >
                                    <div>
                                        Data
                                        <img src={arrow} alt='Ordenação por data' />
                                    </div>
                                </th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortTasksOptions.tasks.map(task => {
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
