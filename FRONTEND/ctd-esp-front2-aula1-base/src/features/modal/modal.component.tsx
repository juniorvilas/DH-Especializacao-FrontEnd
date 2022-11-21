import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import Character from 'features/characters/characters.types';
import { useSelector } from 'react-redux';
import './styles.css';

type modalProps = {
  visible: boolean,
  close: any,
  id: any;
}



const Modal = ({ visible, close, id }: modalProps) => {  
  const { data: characters } = useGetCharactersQuery({ ids: [id] });
   
  console.log(characters)

  return (
    <>
      {visible && (
        <div className="overlay containermodal">
          <div className="modal" id="modal">
            <h2></h2>
            <img />
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