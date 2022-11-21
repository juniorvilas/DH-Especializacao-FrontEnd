import LocationsComponent from './locations.component';
import { locationsApi } from './locations.endpoints';
import locationReducer, { LS } from './locations.slices';
import { LocationsResult, Location } from './locations.types';

export { LocationsComponent, locationReducer, locationsApi };
export type { LocationsResult, Location, LS };
