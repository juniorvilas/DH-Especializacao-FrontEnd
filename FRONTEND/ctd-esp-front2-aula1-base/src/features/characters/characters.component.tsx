import { FC, useState } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';
import { FollowingButtonComponent } from 'features/following/button';
import Character from 'features/characters/characters.types';
import useDisclosure from 'hooks/useDisclosure';
import Modal from 'features/modal/modal.component';


export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ rickIDDS }: CharactersComponentProps) => {

  const {
    isOpen: modalIsOpen,
    close: closeModal,
    toggle: toggleModal
  } = useDisclosure();
  const [id, setId] = useState();
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids: rickIDDS });
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  const onToggleFavorite = (character: Character, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };

  function handlerClick(id: any) {
    setId(id);
    toggleModal();
    return;
  }

  return (
    <>
    <Modal visible={modalIsOpen} close={closeModal} id={id} characters={charactersArray} />
    <div className={'characters'}>
      {charactersArray.map((iHateThisChars) => (
        <div className={"card"} key={iHateThisChars.id}>
          <div className={"card-image"}>
            <img src={iHateThisChars.image} onClick={() => handlerClick(iHateThisChars.id)}  />
          </div>
          <div className={"card-body"}>
            <span>{iHateThisChars.name}</span>
            <FollowingButtonComponent
              isFav={followingIds.indexOf(iHateThisChars.id) >= 0}
              onToggleFavorite={(setFav) => onToggleFavorite(iHateThisChars, setFav)}
            />
            
          </div>
        </div>
      ))}      
    </div>
    
    </>
  );
};

export default CharactersComponent;
