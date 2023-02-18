export interface Todo {
    id? : number;
    text: string;
    day: string;
    reminder:boolean;
}

export interface TodoSliceState {
    todos: Todo[],
    isAddingTodo: boolean
}
