import {useEffect, useState} from 'react';
import {getProducts} from '../serivces/products';
import products from '../mocks/products';

export function useProducers(): [string | undefined, typeof products.list] {
  const [list, setList] = useState<typeof products.list>([]);
  const [title, setTitle] = useState<string>();

  const sortProducers = (producers: typeof products.list) => {
    const sorted = producers.sort((a, b) => a.distance - b.distance);
    setList(sorted);
  };

  useEffect(() => {
    const response = getProducts();
    sortProducers(response.list);
    setTitle(response.title);
  }, []);

  return [title, list];
}
