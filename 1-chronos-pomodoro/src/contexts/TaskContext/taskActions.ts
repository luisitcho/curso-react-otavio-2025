// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import { TaskModel } from '../../models/TaskModel';
import { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETED_TASK = 'COMPLETED_TASK',
    CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type TaskActionsWithPayload =
    | {
          type: TaskActionTypes.START_TASK;
          payload: TaskModel;
      }
    | {
          type: TaskActionTypes.COUNT_DOWN;
          payload: {
              secondsRemaining: number;
          };
      }
    | {
          type: TaskActionTypes.CHANGE_SETTINGS;
          payload: TaskStateModel['config'];
      };

export type TaskActionsWithoutPayload =
    | {
          type: TaskActionTypes.RESET_STATE;
      }
    | {
          type: TaskActionTypes.INTERRUPT_TASK;
      }
    | {
          type: TaskActionTypes.COMPLETED_TASK;
      };

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload;
