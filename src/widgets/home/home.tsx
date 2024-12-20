import { findPizzas, GetSearchParams } from '@entities/home';
import { Container } from '@shared/ui';
import { FC, Suspense } from 'react';
import {
  ParametersFilter,
  ProductCardList,
  Stories,
  TopBar,
} from './components';
import styles from './home.module.scss';

interface HomeProps {
  searchParams: GetSearchParams;
}

export const Home: FC<HomeProps> = async ({ searchParams }) => {
  const categories = await findPizzas(searchParams);
  return (
    <>
      <Container className={styles.container}>
        <h1 className={styles.title}>Все пиццы</h1>
      </Container>
      <TopBar />

      <Stories />

      <Container className={styles.content__wrapper}>
        <div className={styles.content}>
          <div>
            <Suspense>
              <ParametersFilter />
            </Suspense>
          </div>
          <div>
            <div className={styles.products__wrapper}>
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductCardList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
