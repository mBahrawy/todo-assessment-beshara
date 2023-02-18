import Container from './TodosItem.style'
import { Todo } from '@/core/interfaces/Todo'
import { useDispatch } from 'react-redux'
import { deleteTodo, deleteTodoState, toggleTodoRemiderState, updateTodo } from '@/core/store/reducers/todos-reducer'
import { AppDispatch } from '@/core/store/store'

type TodosItemProps = {
  todo: Todo
}

function TodosItem({ todo }: TodosItemProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const toggleItem = () => {
    const modfiedTodo: Todo = {
      ...todo,
      reminder: !todo.reminder,
    }

    dispatch(updateTodo(modfiedTodo)).then(() => {
      dispatch(toggleTodoRemiderState(todo.id as number))
    })
  }

  const deleteItem = () => {
    dispatch(deleteTodo(todo.id as number)).then(() => {
      dispatch(deleteTodoState(todo.id as number))
    })
  }

  return (
    <Container>
      <div
        className={todo?.reminder ? "reminder todo d-flex'" : "todo d-flex'"}
        onClick={toggleItem}
      >
        <div className='flex-grow-1'>
          <h4>{todo.text}</h4>
          <h6>{todo.day}</h6>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-sm btn-danger' onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </Container>
  )
}

export default TodosItem
