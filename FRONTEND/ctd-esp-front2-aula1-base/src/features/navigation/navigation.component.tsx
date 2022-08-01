import { NavDesktop } from 'features/navigation/desktop';
import { NavMobile } from 'features/navigation/mobile';
import { FC } from 'react';

type NavMobileProps = {
    t: (key: string) => string
}

const Navbar: FC<NavMobileProps> = ({t}: NavMobileProps) => (
  <div className={'container'} style={{ width: '100vw' }}>
    <NavDesktop t={t}/>
             <NavMobile t={t}/>
  </div>
);

export default Navbar;
