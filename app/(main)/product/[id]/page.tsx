import { prisma } from '@shared/database';
import { Container } from '@shared/ui';
import { ProductForm } from '@widgets/chooseProductModal/components/productForm';
import { notFound } from 'next/navigation';
import { FC } from 'react';

interface ProductIdPageProps {
  params: Promise<{ id: string }>;
}

const ProductIdPage: FC<ProductIdPageProps> = async ({ params }) => {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container>
      <ProductForm product={product} />
    </Container>
  );
};

export default ProductIdPage;
