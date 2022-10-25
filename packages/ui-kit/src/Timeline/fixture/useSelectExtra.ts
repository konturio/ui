import { useMemo } from 'react';
import { useSelect } from 'react-cosmos/fixture';

type ElementType < T extends ReadonlyArray < unknown > > = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never


export function useSelectExtra<T>(clusterPropsVariants: T[]) {
  const [cluster] = useSelect('cluster', {
    options: clusterPropsVariants.map((v) => JSON.stringify(v)),
    defaultValue: JSON.stringify(clusterPropsVariants[0])
  });

  const clusterProp = useMemo(() => JSON.parse(cluster) as T , [cluster])
  return clusterProp;
}