import { WhiteBlock } from '@entities/cart';
import { FormInput } from '@features/cart';
import { FC } from 'react';
import styles from './cartPersonalForm.module.scss';

interface Props {
  className?: string;
}

export const CartPersonalForm: FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className={styles.wrapper}>
        <FormInput name="firstName" className="text-base" placeholder="Имя" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
        />
        <FormInput name="email" className="text-base" placeholder="E-Mail" />
        <FormInput name="phone" className="text-base" placeholder="Телефон" />
      </div>
    </WhiteBlock>
  );
};
