export const Header = ({ handleShowModal }) => {
  return (
    <nav>
      <div>
        <span>Navbar</span>
        <button onClick={handleShowModal}>Open Modal</button>
      </div>
    </nav>
  );
};
