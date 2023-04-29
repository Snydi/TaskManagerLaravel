import "./myModal.css"

const MyModal = ({ children, visible, setVisible }) => {

    

  return (
    <div className={visible ? "myModal active" : "myModal"} onClick={() => setVisible(false)}>
      <div className={visible ? "myModalContent active" : "myModalContent"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
