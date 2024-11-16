import { FC } from 'react';
import styles from './topBar.module.scss';
import { Container } from '@/src/shared';

interface TopBarProps {
  CategoriesBar: FC;
  SortBar: FC;
}

export const TopBar: FC<TopBarProps> = ({ CategoriesBar, SortBar }) => {
  return (
    <div className={styles.topbar}>
      <Container className={styles.container}>
        <CategoriesBar />
        <SortBar />
      </Container>
    </div>
  );
};
