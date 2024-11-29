import { Container } from '@shared/ui';
import { FC, Suspense } from 'react';
import { ParametersFilter, ProductCardList, TopBar } from './components';
import styles from './home.module.scss';
import { prisma } from '@shared/database';

export const Home: FC = async () => {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

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
      {/* <div style={{ height: "3100px" }}></div> */}
    </Suspense>
  );
};
