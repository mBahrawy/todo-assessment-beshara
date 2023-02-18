import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import HttpService from '@/core/services/http-service'
import { Todo, TodoSliceState } from '@/core/interfaces/Todo'

const initialState: TodoSliceState = {
  todos: [],
  isAddingTodo: false
}

export const getTodos: any = createAsyncThunk('Todo/all', async (_, { rejectWithValue }) => {
  try {
    const { getRequest } = new HttpService()
    const res = await getRequest(`/todos/`)
    return res
  } catch (error: unknown) {
    return rejectWithValue(error)
  }
})

export const addTodo = createAsyncThunk(
  'Todo/add',
  async (todo: Todo, { rejectWithValue }) => {
    try {
      const { postRequest } = new HttpService()
      const res = await postRequest(`/todos/`, todo)
      return res
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)

export const updateTodo = createAsyncThunk(
  'Todo/update',
  async (todo: Todo, { rejectWithValue }) => {
    try {
      const { putRequest } = new HttpService()
      const res = await putRequest(`/todos/${todo.id}`, todo)
      return res
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'Todo/delete',
  async (todoId: number, { rejectWithValue }) => {
    try {
      const { deleteRequest } = new HttpService()
      const res = await deleteRequest(`/todos/${todoId}`)
      return res
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    toggleTodoRemiderState: (state: TodoSliceState, action: PayloadAction<number>) => {
      return {
        ...state,
        todos: state.todos.map((t: Todo) => {
          if (t?.id === action?.payload) {
            return {
              ...t,
              reminder: !t.reminder,
            }
          }
          return t
        }),
      }
    },
    addTodoState: (state: TodoSliceState, action: PayloadAction<Todo>) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    },
    deleteTodoState: (state: TodoSliceState, action: PayloadAction<number>) => {
      return {
        ...state,
        todos: state.todos.filter((t: Todo) => t.id !== action.payload),
      }
    },
    toggleIsAddingTodo: (state: TodoSliceState) => {
      return {
        ...state,
        isAddingTodo: !state.isAddingTodo,
      }
    },
  },
  extraReducers: {
    [getTodos.fulfilled]: (state: TodoSliceState, action: PayloadAction<Todo[]>) => {
      return { ...state, todos: action.payload }
    },
    [addTodo.fulfilled as unknown as string]: (state: TodoSliceState) => {
      return { ...state }
    },
    [updateTodo.fulfilled as unknown as string]: (state: TodoSliceState) => {
      return { ...state }
    },
    [deleteTodo.fulfilled  as unknown as string]: (state: TodoSliceState) => {
      return { ...state }
    },
  },
})

export const { toggleTodoRemiderState, deleteTodoState, addTodoState, toggleIsAddingTodo } = todoSlice.actions
export default todoSlice.reducer
