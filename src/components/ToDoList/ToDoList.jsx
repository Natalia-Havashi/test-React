import ToDo from "components/ToDo/ToDo";
import todo from './todo.json'
const { Component } = require("react");




class ToDoList extends Component {
    state = {
        todoList: todo
    }

    handleCheck =(id) => {
this.setState((prev) => {
    return {
        todoList: prev.todoList.map(todo => todo.id ===id
            ?{...todo,comleted: !todo.completed}
            :todo
            )
    }
    
})
    
}
    render() {
        return (
            <>
            <h1>My To-Do List</h1>
            <ul>
                {this.state.todoList.map((todo) => (
            <ToDo key={todo.id} todo={todo} handleCheck={this.handleCheck} />
            ))}
            </ul>
            </>
        )
    }
}

export default ToDoList