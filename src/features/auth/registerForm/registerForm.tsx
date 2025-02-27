'use client';

import { FormInput } from '@features/cart';
import { zodResolver } from '@hookform/resolvers/zod';
import { formRegisterSchema, TFormRegisterValues } from '@shared/validate';
import { Button } from '@shared/ui';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { registerUser } from '../../../../app/actions';
import styles from './registerForm.module.scss';

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      console.error(error);
      return toast.error('Неверный E-Mail или пароль', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className={styles.wrapper} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles.top}>
          <div className={styles.title__wrapper}>
            <p className={styles.title}>Регистрация</p>
            <p className="text-gray-400 md:text-xs">
              Введите почту и придумайте пароль для регистрации
            </p>
          </div>
          <img
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Полное имя" required />
        <FormInput name="password" label="Пароль" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
