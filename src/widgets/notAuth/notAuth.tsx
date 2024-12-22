import { InfoBlock } from '@entities/auth';
import { FC } from 'react';
import styles from './notAuth.module.scss';

export const NotAuth: FC = () => {
  return (
    <div className={styles.wrapper}>
      <InfoBlock
        title="Доступ запрещён"
        text="Данную страницу могут просматривать только авторизованные пользователи"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
};
