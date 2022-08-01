import { FC } from 'react';
import { LocationsComponent } from 'features/locations';

/**
 * HomePage
 *
 * Usage:
 * ``` <HomePage /> ```
 *
 * @returns the home page
 */
const Page3: FC = () => (

  <div className={'container'}>
      <LocationsComponent />
  </div>
);

export default Page3;
