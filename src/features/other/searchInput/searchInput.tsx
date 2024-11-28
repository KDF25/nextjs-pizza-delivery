'use client';

import { Product } from '@prisma/client';
import { cn } from '@shared/lib';
import { Api } from '@shared/services';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import styles from './searchInput.module.scss';

interface SearchInputProps {
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  return (
    <>
      {focused && <div className={styles.on__focus} />}
      <div ref={ref} className={cn(className, styles.wrapper)}>
        <Search className={styles.icon} />
        <input
          className={styles.input}
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {!!products.length && (
          <div
            className={cn(styles.product__wrapper, focused && styles.focused)}
          >
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className={styles.link}
                href={`/product/${product.id}`}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className={styles.img}
                  width={32}
                  height={32}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
