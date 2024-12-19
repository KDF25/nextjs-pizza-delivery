'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import styles from './addressInput.module.scss';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="b5b8bb983ddcd08648080e0271d9dd367bb7aa65"
      onChange={(data) => onChange?.(data?.value)}
      inputProps={{
        placeholder: 'Введите адрес...',
        className: `${styles.input}`,
      }}
    />
  );
};
