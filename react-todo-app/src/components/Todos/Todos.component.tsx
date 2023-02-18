import { useEffect, useRef } from 'react'
import Container from './Todos.style'
import TodosItem from '../TodosItem/TodosItem.component'

import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '@/core/store/reducers/todos-reducer'
import { AppDispatch } from '@/core/store/store'
import { AppState } from '@/core/interfaces/Redux'

function Todos(): JSX.Element {
  const { todos } = useSelector((state: AppState) => state.todos)

  const dataLoadingRef = useRef<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()

  const getTodosList = async () => {
    dispatch(getTodos())
  }

  useEffect(() => {
    if (!dataLoadingRef.current) {
      getTodosList()
      dataLoadingRef.current = true
    }
  }, [])

  return (
    <Container>
      {todos.map((t) => (
        <TodosItem key={t.id} todo={t} />
      ))}
    </Container>
  )
}

export default Todos
