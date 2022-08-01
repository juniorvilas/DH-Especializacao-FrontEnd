import { FC } from 'react';
import { FolComp } from 'features/following';

/**
 * Following page
 *
 * Usage:
 * ``` <FollowingPage /> ```
 *
 * @returns the following page
 */
const Page1: FC = () => (
  <div className={'container'} style={{ flexDirection: 'column' }}>
    <h2>Following Characters</h2>
    <FolComp />
  </div>
);

export default Page1;
