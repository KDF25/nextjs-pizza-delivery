'use client';

import { cn } from '@shared/lib';
import { ClearButton, ErrorText, RequiredSymbol, Textarea } from '@shared/ui';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './formTextarea.module.scss';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormTextarea: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '');
  };

  return (
    <div className={cn(className, styles.wrapper)}>
      <p className={styles.title}>
        {label} {required && <RequiredSymbol />}
      </p>

      <div className={styles.input_wrapper}>
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className={styles.error} />}
    </div>
  );
};
