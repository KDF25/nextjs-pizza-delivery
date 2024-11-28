'use client';

import { CATEGORIES, pizza } from '@shared/config';
import { Container } from '@shared/ui';
import { FC, Suspense } from 'react';
import { ParametersFilter, ProductCardList, TopBar } from './components';
import styles from './home.module.scss';

export const Home: FC = () => {
  return (
    <Suspense>
      <Container className={styles.container}>
        <h1 className={styles.title}>Все пиццы</h1>
      </Container>
      <TopBar />

      <Container className={styles.content__wrapper}>
        <div className={styles.content}>
          <div>
            <ParametersFilter />
          </div>
          <div>
            <div className={styles.products__wrapper}>
              <ProductCardList
                categoryId={CATEGORIES[0].id}
                title={CATEGORIES[0].name}
                items={pizza}
              />
              <ProductCardList
                categoryId={CATEGORIES[1].id}
                title={CATEGORIES[1].name}
                items={pizza}
              />
            </div>
          </div>
        </div>
      </Container>
      {/* <div style={{ height: "3100px" }}></div> */}
    </Suspense>
  );
};
