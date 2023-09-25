import React from 'react';
import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';

interface INavigationProps {
  id: number;
  title: string;
  path: string;
}

const Header = () => {
  const navigation: INavigationProps[] = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Burgers', path: '/burgers' },
    { id: 3, title: 'Comments', path: '/comments' },
    { id: 4, title: 'Posts', path: '/posts' }
  ];
  const { pathname } = useRouter();
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        {navigation.map(({ id, title, path }: INavigationProps) => {
          return (
            <Link key={id} href={path}>
              <div className={pathname === path ? styles.active : ''}>{title}</div>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
export default Header;
