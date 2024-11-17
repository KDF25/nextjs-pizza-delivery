import { FC } from 'react';
import styles from './priceFilter.module.scss';
import { Input, RangeSlider } from '@shared/ui';
import { DEFAULT_VALUES } from '@shared/config';

export const PriceFilter: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p>Цена от и до:</p>
      <div className={styles.inputs}>
        <Input
          type="number"
          min={0}
          max={DEFAULT_VALUES.price.max}
          placeholder="0"
          defaultValue={DEFAULT_VALUES.price.defaultMin}
        />
        <Input
          type="number"
          min={DEFAULT_VALUES.price.min}
          max={DEFAULT_VALUES.price.max}
          defaultValue={DEFAULT_VALUES.price.defaultMax}
          placeholder={DEFAULT_VALUES.price.max.toLocaleString()}
        />
      </div>
      <RangeSlider
        min={DEFAULT_VALUES.price.min}
        max={DEFAULT_VALUES.price.max}
        step={DEFAULT_VALUES.price.step}
        value={[DEFAULT_VALUES.price.min, DEFAULT_VALUES.price.max]}
      />
    </div>
  );
};
