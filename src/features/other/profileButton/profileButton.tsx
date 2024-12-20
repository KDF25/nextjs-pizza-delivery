import { paths } from '@shared/config';
import { Button } from '@shared/ui';
import { CircleUser, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import styles from './profileButton.module.scss';

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <Button
          onClick={onClickSignIn}
          variant="outline"
          className={styles.login}
        >
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href={paths.profile}>
          <Button variant="secondary" className={styles.profile}>
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      )}
    </div>
  );
};
