import { CheckboxFilter, ChooseFilter, PriceFilter } from '@features/other';
import { FC } from 'react';
import styles from './parametersFilter.module.scss';
import { INGRIDIENTS } from '@shared/config';

export const ParametersFilter: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ChooseFilter />
      <PriceFilter />
      <CheckboxFilter
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={INGRIDIENTS.slice(0, 6)}
        items={INGRIDIENTS}
      />
    </div>
  );
};
