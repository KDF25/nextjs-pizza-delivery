'use client';

import { counterAction } from '@entities/cart';
import { zodResolver } from '@hookform/resolvers/zod';
import { cartFormSchema, CartFormValues } from '@shared/config';
import { useCart } from '@shared/hooks';
import { Container, mailForm } from '@shared/ui';
import { FC, useState } from 'react';
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
import { Api } from '@shared/services';

export const Cart: FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  // const { data: session } = useSession();

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

  // useEffect(() => {
  //   async function fetchUserInfo() {
  //     const data = await Api.auth.getMe();
  //     const [firstName, lastName] = data.fullName.split(' ');

  //     form.setValue('firstName', firstName);
  //     form.setValue('lastName', lastName);
  //     form.setValue('email', data.email);
  //   }

  //   if (session) {
  //     fetchUserInfo();
  //   }
  // }, [session]);

  // const handle = async () => {
  //   const form = mailForm('https://your-delivery-app-link.com');
  //   await Api.mail.sendMail({
  //     to: 'karimov.damir.faridovich@gmail.com',
  //     ...form,
  //   });
  // };

  const onSubmit = async (data: CartFormValues) => {
    // const onSubmit = async () => {
    try {
      setSubmitting(true);

      const info = await createOrder(data);

      if (info) {
        const [id, url] = info;
        toast.error('Заказ успешно оформлен! 📝 Переход на оплату... ', {
          icon: '✅',
        });

        const form = mailForm(
          'https://your-delivery-app-link.com',
          id as number,
          totalAmount
        );
        await Api.mail.sendMail({
          to: data?.email,
          ...form,
        });

        if (url) {
          location.href = url as string;
        }
      }
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

              <CartPersonalForm
                className={loading ? 'opacity-40 pointer-events-none' : ''}
              />

              <CartAddressForm
                className={loading ? 'opacity-40 pointer-events-none' : ''}
              />
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
