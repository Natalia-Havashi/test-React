import Counter from "./Counter/Counter";
import { Header } from "./Header/Header";
import Modal from "./Modal/Modal";

export const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <Modal><h2>Modal</h2></Modal> 
    </div>
  );
};
