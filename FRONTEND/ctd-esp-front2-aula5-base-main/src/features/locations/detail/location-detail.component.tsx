import { FC } from 'react';
import { CharactersComponent } from 'features/characters';
import { Location } from 'features/locations';


export type LocationDetailComponentProps = {
  location?: Location;
  loading?: boolean;
};

const LocationDetailComponent: FC<LocationDetailComponentProps> = ({
  location
}: LocationDetailComponentProps) => {
  if (!location) return <></>;
  const characterIds = location.residents.map((resident) =>
    parseInt(resident.split('character')[1].replace('/', ''), 10)
  );

  return (
    <div>
      <h2>
        #{location.id} - {location.name}
      </h2>
      <h3>{location.dimension}</h3>
      <CharactersComponent ids={characterIds} />
    </div>
  );
};

export default LocationDetailComponent;
