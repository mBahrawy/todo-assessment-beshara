import Container from './TodoApp.style'
import Todos from '@/components/Todos/Todos.component'
import TodosHeader from '@/components/TodosHeader/TodosHeader.component'

const TodoApp = (): JSX.Element => {
  return (
    <Container className='todo-container'>
      <TodosHeader />
      <Todos />
    </Container>
  )
}

export default TodoApp
