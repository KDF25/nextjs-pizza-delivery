'use client';

import { cn } from '@shared/lib';
import {
  FilterChecboxProps,
  FilterCheckbox,
  Input,
  Skeleton,
} from '@shared/ui';
import { FC, useState } from 'react';
import styles from './checkboxFilter.module.scss';

type Item = FilterChecboxProps;

interface CheckboxFilterProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={cn(className, styles.wrapper)}>
        <p>{title}</p>
        <div className={styles.items}>
          {...Array(limit)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="h-6 rounded-[8px]" />
            ))}
          {!!defaultItems && <Skeleton className="w-28 h-6rounded-[8px]" />}
        </div>
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={cn(className, styles.wrapper)}>
      <p>{title}</p>

      {showAll && (
        <Input
          onChange={onChangeSearchInput}
          placeholder={searchInputPlaceholder}
          className={styles.input}
        />
      )}

      <div className={styles.items}>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div
          className={
            showAll
              ? `${styles.button__wrapper} ${styles.show__all}`
              : styles.button__wrapper
          }
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.button}
          >
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
