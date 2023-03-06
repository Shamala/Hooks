import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log("child rendered");
  if (!modalState) return null;

  return (
    <main className="modal">
      <p>This is my Modal</p>

      <button onClick={() => setModalState(false)}>Close</button>
    </main>
  );
};

export default forwardRef(Modal);
