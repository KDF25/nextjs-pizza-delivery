'use client';

import { userType } from '@entities/auth';
import { LoginForm, RegisterForm } from '@features/auth';
import { paths } from '@shared/config';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@shared/ui';
import { signIn } from 'next-auth/react';
import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = React.useState<userType>(userType.login);

  const onSwitchType = () => {
    setType(type === userType.login ? userType.register : userType.login);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[90vw] max-w-[450px] bg-white p-10 max-md:p-5 max-sm:rounded-sm">
        <DialogTitle style={{ display: 'none' }} />
        <DialogDescription style={{ display: 'none' }} />
        {type === userType.login ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}

        <hr />
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              signIn('github', {
                callbackUrl: paths.home,
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              className="w-6 h-6"
              src="https://github.githubassets.com/favicons/favicon.svg"
            />
            GitHub
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              signIn('google', {
                callbackUrl: paths.home,
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              className="w-6 h-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>

        <Button
          variant="outline"
          onClick={onSwitchType}
          type="button"
          className="h-12"
        >
          {type !== userType.login ? 'Войти' : 'Регистрация'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
