import { FC } from 'react';
import CharactersComponent from 'features/characters/characters.component';
import { useAppSelector } from 'store/hooks';

const FolComp: FC = () => {
  const { followingIds } = useAppSelector((state) => state.following);
  return <div>{followingIds.length > 0 && <CharactersComponent rickIDDS={followingIds} />}</div>;
};

export default FolComp;
