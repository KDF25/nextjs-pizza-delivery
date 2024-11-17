'use client';

import { FC, useState } from 'react';
import styles from './checkboxFilter.module.scss';
import { FilterChecboxProps, FilterCheckbox, Input } from '@shared/ui';
import { cn } from '@shared/lib';

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
  //   loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // if (loading) {
  //   return (
  //     <div className={className}>
  //       <p className="font-bold mb-3">{title}</p>

  //       {...Array(limit)
  //         .fill(0)
  //         .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}

  //       <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
  //     </div>
  //   );
  // }

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
