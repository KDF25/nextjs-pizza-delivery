import { FC } from 'react';
import { ParametersFilter, TopBar } from './components';
import styles from './home.module.scss';
import { Container } from '@shared/ui';

export const Home: FC = () => {
  return (
    <>
      <Container className={styles.container}>
        <h1 className={styles.title}>Все пиццы</h1>
      </Container>
      <TopBar />

      <Container className={styles.content__wrapper}>
        <div className={styles.content}>
          <ParametersFilter />
        </div>
      </Container>
      {/* <div style={{ height: "3100px" }}></div> */}
    </>
  );
};
