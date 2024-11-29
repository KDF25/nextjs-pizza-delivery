import { prisma } from '@shared/database';
import { ChooseProductModal } from '@widgets/chooseProductModal';
import { notFound } from 'next/navigation';
import { FC } from 'react';

interface ProductModalPageProps {
  params: Promise<{ id: string }>;
}

const ProductModalPage: FC<ProductModalPageProps> = async ({ params }) => {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
};

export default ProductModalPage;
