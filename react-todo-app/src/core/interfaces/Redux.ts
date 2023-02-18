import { TodoSliceState } from "./Todo";

export interface AsyncDispatchResponse {
    type: string;
    payload: unknown;
    meta: Meta;
  }

  export interface Meta {
  arg: FormData;
  requestId: string;
  requestStatus: string;
}

export interface AppState {
  todos: TodoSliceState
}