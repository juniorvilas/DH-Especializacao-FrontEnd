import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';
import { Card } from 'features/card';
import CardBody from 'features/card/card-body.component';
import { FollowingButtonComponent } from 'features/following/button';
import Character from 'features/characters/characters.types';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS
}: CharactersComponentProps) => {
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

  return (
    <div className={'characters'}>
      {charactersArray.map((iHateThisChars) => (
        <Card key={iHateThisChars.id}>
          <Card.Image>
            <img src={iHateThisChars.image} />
          </Card.Image>
          <CardBody>
            <span>{iHateThisChars.name}</span>
            <FollowingButtonComponent
              isFav={followingIds.indexOf(iHateThisChars.id) >= 0}
              onToggleFavorite={(setFav) => onToggleFavorite(iHateThisChars, setFav)}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CharactersComponent;
