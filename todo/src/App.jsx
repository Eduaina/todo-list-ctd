import './App.css'

function App() {
  const todoList = [
    {id: 1, title: "Groceries Shopping"},
    {id: 2, title: "Gym"},
    {id: 3, title: "Work"},
]

  return (
    <div>
      
      <h1>My Todos</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}> {item.title} </li>
        ))} </ul>
    </div>
  )
}

export default App