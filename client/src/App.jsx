import AddTodoForm from './components/Todo/AddTodoForm'
import { TodoList } from './components/Todo/TodoList'
import './index.css'

function App() {

  return (
    <>
      <h1>Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </>
  )
}

export default App
