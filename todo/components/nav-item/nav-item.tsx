import { NavItem } from '../../types/common';
import { useRouter } from 'next/router';
import Link from 'next/link';

type NavItemProps = {
  item: NavItem;
};

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <li>
      <div
        className={`${asPath === item.path ? 'nav-item--active' : ''} nav-item`}
      >
        <Link href={item.path}>{item.name}</Link>
      </div>
    </li>
  );
};

export default NavItem;
