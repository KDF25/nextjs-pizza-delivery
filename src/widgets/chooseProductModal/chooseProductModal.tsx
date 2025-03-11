'use client';

import { cn } from '@/shared/lib/utils';
import { ProductWithRelations } from '@entities/productForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  ScrollArea,
} from '@shared/ui';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import styles from './chooseProductModal.module.scss';
import { ProductForm } from './components';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize(); // Устанавливаем начальное значение
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!product) return null;

  return isMobile ? (
    <Drawer open onOpenChange={() => router.back()}>
      <DrawerTitle style={{ display: 'none' }} />
      <DrawerContent className={cn(styles.content, className)}>
        <DrawerDescription style={{ display: 'none' }} />
        <ScrollArea className="h-full">
          <ProductForm product={product} onSubmit={() => router.back()} />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogTitle style={{ display: 'none' }} />
      <DialogContent className={cn(styles.content, className)}>
        <DialogDescription style={{ display: 'none' }} />
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
