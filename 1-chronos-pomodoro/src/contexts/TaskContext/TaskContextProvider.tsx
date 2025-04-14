import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState(initialTaskState);
    const [number, dispatch] = useReducer((state, action) => {
        console.log(state, action);
        switch (action) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            case 'INITIAL_STATE':
                return 0;
        }
        return state;
    }, 0);

    // useEffect(() => console.log(state), [state]);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            <h1>Testando {number}</h1>
            <button onClick={() => dispatch('INCREMENT')}>Incrementar</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrementar</button>
            <button onClick={() => dispatch('INITIAL_STATE')}>Estado inicial</button>
        </TaskContext.Provider>
    );
}
