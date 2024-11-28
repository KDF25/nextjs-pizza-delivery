import { Size } from '@prisma/client';
import { Api } from '@shared/services';
import { useEffect, useState } from 'react';

export const useFilterSizes = () => {
  const [sizes, setSizes] = useState<Size[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSize() {
      try {
        setLoading(true);
        const sizes = await Api.sizes.getAll();
        setSizes(sizes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSize();
  }, []);

  return {
    sizes,
    loading,
  };
};
