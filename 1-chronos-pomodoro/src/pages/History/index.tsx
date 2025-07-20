import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { showMessage } from '../../adapters/showMessage';

import styles from './styles.module.scss';

export function History() {
    const { state, dispatch } = useTaskContext();
    const [confirmClearHistory, setConfirmClearHistory] = useState(false);
    const hasTasks = state.tasks.length > 0;
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: 'startDate',
            direction: 'desc',
        };
    });

    useEffect(() => {
        setSortTasksOptions(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            }),
        }));
    }, [state.tasks]);

    useEffect(() => {
        if (!confirmClearHistory) return;

        setConfirmClearHistory(false);
        showMessage.success('Histórico apagado com sucesso!');
    }, [confirmClearHistory, dispatch]);

    useEffect(() => {
        return () => {
            showMessage.dismiss();
        };
    }, []);

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

    function hasndleResetHistory() {
        showMessage.dismiss();
        showMessage.confirm(
            'Você tem certeza que deseja apagar todo o histórico?',
            confirmation => {
                setConfirmClearHistory(confirmation);

                // if (confirmation) {
                //     dispatch({ type: TaskActionTypes.RESET_STATE });
                // }
            },
        );
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>Histórico</span>

                    {hasTasks && (
                        <span>
                            <DefaultButton
                                icon={<TrashIcon />}
                                color='red'
                                aria-label='Apagar todo o histórico'
                                title='Apagar o histórico'
                                onClick={hasndleResetHistory}
                            />
                        </span>
                    )}
                </Heading>
            </Container>

            <Container className={styles.history}>
                {hasTasks ? (
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
                                            <img
                                                src='/images/bottom-arrow.svg'
                                                alt='Ordenação por nome'
                                            />
                                        </div>
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({ field: 'duration' })
                                        }
                                        className={styles.order}
                                    >
                                        <div>
                                            Duração
                                            <img
                                                src='/images/bottom-arrow.svg'
                                                alt='Ordenação por duração'
                                            />
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
                                            <img
                                                src='/images/bottom-arrow.svg'
                                                alt='Ordenação por data'
                                            />
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
                                            <td>
                                                {getTaskStatus(task, state.activeTask)}
                                            </td>
                                            <td>{taskTypeDictionary[task.type]}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className='text-center font-medium'>
                        Ainda não existem tarefas criadas.
                    </p>
                )}
            </Container>
        </MainTemplate>
    );
}
