import { productData } from '@entities/home';
import { DEFAULT_VALUES } from '@shared/config';
import { ReturnProps } from '@shared/hooks';
import { Input, RangeSlider } from '@shared/ui';
import { FC } from 'react';
import styles from './priceFilter.module.scss';

interface PriceFilterProps {
  filters: ReturnProps;
}

export const PriceFilter: FC<PriceFilterProps> = ({ filters }) => {
  const updatePrices = (prices: number[]) => {
    filters.setPrices(productData.priceFrom, prices[0]);
    filters.setPrices(productData.priceTo, prices[1]);
  };

  return (
    <div className={styles.wrapper}>
      <p>Цена от и до:</p>
      <div className={styles.inputs}>
        <Input
          type="number"
          min={DEFAULT_VALUES.price.min}
          max={DEFAULT_VALUES.price.max}
          placeholder={DEFAULT_VALUES.price.min.toLocaleString()}
          value={
            String(filters.prices.priceFrom) || DEFAULT_VALUES.price.defaultMin
          }
          onChange={(e) =>
            filters.setPrices(productData.priceFrom, Number(e.target.value))
          }
        />
        <Input
          type="number"
          min={DEFAULT_VALUES.price.min}
          max={DEFAULT_VALUES.price.max}
          placeholder={DEFAULT_VALUES.price.max.toLocaleString()}
          value={
            String(filters.prices.priceTo) || DEFAULT_VALUES.price.defaultMax
          }
          onChange={(e) =>
            filters.setPrices(productData.priceTo, Number(e.target.value))
          }
        />
      </div>
      <RangeSlider
        min={DEFAULT_VALUES.price.min}
        max={DEFAULT_VALUES.price.max}
        step={DEFAULT_VALUES.price.step}
        value={[
          filters.prices.priceFrom || DEFAULT_VALUES.price.min,
          filters.prices.priceTo || DEFAULT_VALUES.price.max,
        ]}
        onValueChange={updatePrices}
      />
    </div>
  );
};
