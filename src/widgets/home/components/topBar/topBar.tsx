import { Categories } from '@features/categories';
// import { SortPopup } from '@features/other';
import { Container } from '@shared/ui/container';
import { FC } from 'react';
import styles from './topBar.module.scss';
import { Filter } from './filter';

export const TopBar: FC = () => {
  return (
    <div className={styles.topBar}>
      <Container className={styles.container}>
        <Filter className={styles.filter} />
        <Categories />
        {/* <SortPopup className={styles.sorting} /> */}
      </Container>
    </div>
  );
};
