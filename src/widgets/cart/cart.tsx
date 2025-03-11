'use client';

import { counterAction } from '@entities/cart';
import { zodResolver } from '@hookform/resolvers/zod';
import { paths } from '@shared/config';
import { useCart } from '@shared/hooks';
import { Api } from '@shared/services';
import { Container } from '@shared/ui';
import { cartFormSchema, CartFormValues } from '@shared/validate';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createOrder } from '../../../app/actions';
import styles from './cart.module.scss';
import {
  CartAddressForm,
  CartList,
  CartPersonalForm,
  CartSidebar,
} from './components';

export const Cart: FC = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const { data: session } = useSession();

  const form = useForm<CartFormValues>({
    resolver: zodResolver(cartFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  useEffect(() => {
    if (items?.length === 0) {
      router.push(paths.home);
    }
  }, [items]);

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');
      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit = async (data: CartFormValues) => {
    try {
      setSubmitting(true);
      await createOrder(data);
      toast.error('Заказ успешно оформлен!', {
        icon: '✅',
      });
      router.push(paths.home);
    } catch (err) {
      console.log(err);
      setSubmitting(false);
      toast.error('Не удалось создать заказ', {
        icon: '❌',
      });
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: counterAction
  ) => {
    const newQuantity =
      type === counterAction.plus ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className={styles.wrapper}>
      <p className={styles.title}>Оформление заказа</p>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.content}>
            <div className={styles.left}>
              <CartList
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />

              <CartPersonalForm className={loading ? styles.loading : ''} />

              <CartAddressForm className={loading ? styles.loading : ''} />
            </div>
            <div>
              <CartSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};
