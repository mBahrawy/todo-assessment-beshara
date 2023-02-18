import React, { useState } from 'react'
import Container from './AddTodo.style'
import { useDispatch, useSelector } from 'react-redux'
import { Todo } from '@/core/interfaces/Todo'
import { AppDispatch } from '@/core/store/store'
import { addTodo, addTodoState, toggleIsAddingTodo } from '@/core/store/reducers/todos-reducer'

type AddTodoProps = {}

function AddTodo(props: AddTodoProps): JSX.Element {
  const [text, setText] = useState<string>('')
  const [day, setDay] = useState<string>('')
  const [reminder, setReminder] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()

  const onSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length < 2) {
      alert('Please enter a valid todo name')
      return
    }

    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000),
      text,
      day,
      reminder,
    }

    dispatch(addTodo(newTodo)).then(() => {
      dispatch(addTodoState(newTodo))
      dispatch(toggleIsAddingTodo())
      setText('')
      setDay('')
      setReminder(false)

    })
  }

  return (
    <Container>
      <form onSubmit={onSubmit} className='add-form'>
        <div className='form-group mb-2'>
          <label htmlFor='text'>Todo</label>
          <input
            className='form-control'
            type='text'
            name='text'
            id='text'
            placeholder='Add Todo'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor='day'>Day & Time</label>
          <input
            className='form-control'
            type='text'
            name='day'
            id='day'
            placeholder='Add day & time'
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className='form-group mb-2'>
          <input
            className='form-check-input'
            type='checkbox'
            id='reminder'
            name='reminder'
            onChange={(e) => setReminder(e.target.checked)}
          />
          <label className='form-check-label px-2' htmlFor='reminder'>
            Set reminder
          </label>
        </div>
        <div>
          <input type='submit' className='btn btn-block btn-primary w-100 mb-3' value='Submit' />
        </div>
      </form>
    </Container>
  )
}

export default AddTodo
