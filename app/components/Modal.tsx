interface ModalProps {
  modalOpen: boolean,
  setModalOpen: (open : boolean) => boolean | void;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className='modal-box relative bg-info-content '>
        <label
          onClick={() => setModalOpen(false)}
          className='btn btn-sm btn-circle btn-outline absolute right-2 top-2'
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
}

export default Modal;
