import { FC } from 'react';
import { Location } from 'features/locations';
import { useNavigate } from 'react-router-dom';
import useTracking from 'features/tracking/tracking.context';

export type LocationsTableProps = {
  locations: Location[];
};

const LocationsTable: FC<LocationsTableProps> = ({ locations }: LocationsTableProps) => {
  const navigate = useNavigate();
  const { trackEvent } = useTracking();
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Dimension</th>
          <th># of Characters</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((l) => (
          <tr
            key={l.id}
            onClick={() => {
              navigate(`/location/${l.id}`);
              trackEvent('LOCATION_CLICKED', 'LOCATION_TABLE');
            }}>
            <td>#{l.id}</td>
            <td>{l.name}</td>
            <td>{l.type}</td>
            <td>{l.dimension}</td>
            <td>{l.residents.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LocationsTable;
