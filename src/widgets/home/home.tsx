import { Categories, SortPopup, TopBar } from '@/src/features';
import { Container } from '@/src/shared';
import { FC } from 'react';
import styles from './home.module.scss';

// interface HomeProps {}

export const Home: FC = () => {
  return (
    <>
      <Container className={styles.container}>
        <h1 className={styles.title}>Все пиццы</h1>
      </Container>
      <TopBar CategoriesBar={Categories} SortBar={SortPopup} />
      {/* <div style={{ height: "3100px" }}></div> */}
    </>
  );
};
