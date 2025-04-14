import { TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
    state: TaskActionModel,
    action: TaskActionModel,
): TaskActionModel {
    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            return state;
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return state;
        }
        case TaskActionTypes.RESET_TASK: {
            return state;
        }
    }
    return state;
}
