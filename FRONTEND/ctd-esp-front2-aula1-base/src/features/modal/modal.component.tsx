import './styles.css';

type modalProps = {
  visible: boolean,
  close: any,
  characters?: any;
  id: any;
}


const Modal = ({ visible, close, characters, id }: modalProps) => {
  console.log(characters)
  return (
    <>
      {visible && (
        <div className="overlay containermodal">
          <div className="modal" id="modal">            
            <h2>{characters[0].name}</h2>
            <img src={characters[0].image} alt={characters[0].name} />
            <div className="actions">
              <button className="toggle-button" onClick={close}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;