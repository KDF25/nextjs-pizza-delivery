'use client';

import { cn } from '@shared/lib';
import { ClearButton, ErrorText, Input, RequiredSymbol } from '@shared/ui';
import { useFormContext } from 'react-hook-form';
import styles from './formInput.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
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
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <div className={cn(className, styles.wrapper)}>
      {label && (
        <p className={styles.title}>
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className={styles.input_wrapper}>
        <Input className="h-12 text-md pr-10" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className={styles.error} />}
    </div>
  );
};
