import { Component } from "react";
//класовий компонент який наслідує
class Counter extends Component {
//конструктор створений вже під капотом у реакта,тому самостійно нам його не потрібно створювати
// state - це обєкт.
//counter - це ключ обєкта,щоб звернутись до цього ключа ми використ. this так як ми знаходимось у класовому компоненті
state = {
counter: 0
} 
// Для handleClick тепер не потрібна фу-ія,так як ми знаходимось в середині класу,то це буде метод.
//Але для того щоб не втрачати контекст використовуємо стрілку,так як стрілка привязує контекс відразу.під час створення метода.і так як у стрілки немає this,то вона той this бере від батьківського елементу,тобто від компоненту на порядок вище. 
handleIcrement = () => 
this.setState((prevState) => ({
 counter: prevState.counter + 1,
    }))
 //метод зменшує попередній стан (prevState) на 1
handleDecrement = () => 
    this.setState((prevState) => ({
counter: prevState.counter - 1,
        }))    
//Щоб caunter не заходив нище 0, то робимо умову
// handleDecrement = () => 
// this.setState((prevState) => {
// if(prevState.counter === 0) return {counter: 0}    
// return {counter: prevState.counter - 1}
// }))  

render (){
        return (
    <div>
        <div>
            <div>
                <h5>Counter</h5>
                <p>{this.state.counter}</p>
                <div>
                    <button onClick={this.handleDecrement}>
                        <i>-</i>
                    </button>

                    <button onClick={this.handleIcrement}>
                        <i>+</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )  } 
}


export default Counter 