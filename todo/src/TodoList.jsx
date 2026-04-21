function TodoList () {
    const todoList = [
    {id: 1, title: "Shopping"},
    {id: 2, title: "Gym"},
    {id: 3, title: "Work"},
]

    return (
        <ul> {todoList.map((item) => (
        <li key={item.id}> {item.title} </li>
        ))} </ul> 
    )
}

export default TodoList