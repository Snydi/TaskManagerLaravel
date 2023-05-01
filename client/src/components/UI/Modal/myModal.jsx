import Offcanvas from 'react-bootstrap/Offcanvas';
const MyModal = ({ children, visible, setVisible }) => {

    

  return (
    <Offcanvas show={visible} onHide={setVisible}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Groups</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
  );
};

export default MyModal;
