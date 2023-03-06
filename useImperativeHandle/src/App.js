import { useRef } from "react";
import Modal from "./Modal";

function App() {
  const modalRef = useRef();
  const handleOpenModal = () => {
    modalRef.current.openModal();
  };
  console.log("Parent rendered");
  return (
    <main className="App">
      <p>Parent Component</p>
      <Modal ref={modalRef}></Modal>
      <button onClick={handleOpenModal}>Open</button>
    </main>
  );
}

export default App;
