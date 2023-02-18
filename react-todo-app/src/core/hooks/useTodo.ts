import { Observable } from 'rxjs'
import { Todo } from '../interfaces/Todo'
import HttpService from '../services/http-service'

function useTodo() {
  const httpService = new HttpService()

  const getTodos = async (): Promise<unknown> => {
    const httpService = new HttpService()
    return httpService.getRequest('/todos/')
  }

  const deleteTodo = (todo: Todo): Promise<unknown> => {
    return httpService.deleteRequest(`/todos/${todo.id}`)
  }

  const toggleTodo = async (todo: Todo): Promise<unknown> => {
    return httpService.putRequest(`/todos/${todo.id}`, todo)
  }

  const addTodo = async (todo: Todo): Promise<unknown> => {
    return httpService.postRequest(`/todos/`, todo)
  }

  return {
    getTodos,
    deleteTodo,
    toggleTodo,
    addTodo,
  }
}

export default useTodo
