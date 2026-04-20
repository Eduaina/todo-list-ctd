function TodoForm () {
    return (
        <form>
            <label htmlFor="todoTitle">Todo</label>
            <input type="text" id="todoTitle" placeholder="Add New Item"/>
            <button type="submit" disabled>Add Todo</button>
        </form>
    )
}

export default TodoForm