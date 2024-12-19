'use client';

import { WhiteBlock } from '@entities/cart';
import { FormTextarea } from '@features/cart';
import { AdressInput, ErrorText } from '@shared/ui';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styles from './cartAddressForm.module.scss';

interface Props {
  className?: string;
}

export const CartAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className={styles.wrapper}>
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
