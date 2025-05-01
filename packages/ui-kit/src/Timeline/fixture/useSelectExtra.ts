import { useMemo } from 'react';
import { useSelect } from 'react-cosmos/client';

export function useSelectExtra<T>(clusterPropsVariants: T[]) {
  const [cluster] = useSelect('cluster', {
    options: clusterPropsVariants.map((v) => JSON.stringify(v)),
    defaultValue: JSON.stringify(clusterPropsVariants[0]),
  });

  const clusterProp = useMemo(() => JSON.parse(cluster) as T, [cluster]);
  return clusterProp;
}
