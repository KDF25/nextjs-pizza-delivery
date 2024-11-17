import { Categories } from '@features/categories';
import { SortPopup } from '@features/sortPopup';
import { Container } from '@shared/ui/container';
import { FC } from 'react';
import styles from './topBar.module.scss';

export const TopBar: FC = () => {
  return (
    <div className={styles.topbar}>
      <Container className={styles.container}>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
