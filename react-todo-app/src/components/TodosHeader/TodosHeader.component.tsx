import React, { useState } from 'react'
import Container from './TodosHeader.style'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsAddingTodo } from '@/core/store/reducers/todos-reducer'
import { AppDispatch } from '@/core/store/store'
import { AppState } from '@/core/interfaces/Redux'
import AddTodo from '../AddTodo/AddTodo.component'

type TodosHeaderProps = {}

function TodosHeader(props: TodosHeaderProps): JSX.Element {
  const title: string = 'Todo App'
  const { isAddingTodo } = useSelector((state: AppState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()
  const toggleIsAdding = () => dispatch(toggleIsAddingTodo())

  return (
    <Container>
      <header>
        <h3>{title}</h3>
        <button className='btn btn-success' onClick={toggleIsAdding}>
          {isAddingTodo ? 'Close' : 'Add'}
        </button>
      </header>
      {isAddingTodo ? <AddTodo /> : null}
    </Container>
  )
}

export default TodosHeader
