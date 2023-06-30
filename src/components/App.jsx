import { Component } from 'react';
import Counter from './Counter/Counter';
import { Header } from './Header/Header';
import Modal from './Modal/Modal';
import ToDoList from './ToDoList/ToDoList';

class App extends Component {
  state = {
    isShowModal: false,
  };
  //реалізуємо логіку зміни ключа.
  openModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div>
        <Header handleShowModal={this.openModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <h2>Modal</h2>
          </Modal>
        )}
        <ToDoList />
      </div>
    );
  }
}

export default App;
// тег Модал парний, він використовується для управління станом та передачі данних іншим компонентам,які можуть бути його дочірніми компонентами.
//ДЛя того шоб компоненти в апп рендерились,рендер запускається тоді коли є пропс або коли є state,так як АПП це головний компонент то пропсів приймати він  не може.
//Отже має бути state і тому апп ми робимо класовим компонентом.
