'use client';

import { cn } from '@/shared/lib/utils';
import { ProductWithRelations } from '@entities/productForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  // Drawer,
  // DrawerContent,
  // DrawerDescription,
  // DrawerTitle,
} from '@shared/ui';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './chooseProductModal.module.scss';
import { ProductForm } from './components';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <>
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogTitle style={{ display: 'none' }} />
        <DialogContent className={cn(styles.content, className)}>
          <DialogDescription style={{ display: 'none' }} />
          <ProductForm product={product} onSubmit={() => router.back()} />
        </DialogContent>
      </Dialog>
      {/* <Drawer open={Boolean(product)} onOpenChange={() => router.back()}>
        <DrawerTitle style={{ display: 'none' }} />
        <DrawerContent className={cn(styles.content, className)}>
          <DrawerDescription style={{ display: 'none' }} />
          <ProductForm product={product} onSubmit={() => router.back()} />
        </DrawerContent>
      </Drawer> */}
    </>
  );
};
