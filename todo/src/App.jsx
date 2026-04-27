import { useState } from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import './App.css'

const todos = [
  {id: 1, title: "Shopping"},
  {id: 2, title: "Gym"},
  {id: 3, title: "Work"},
]

function App() {
const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App