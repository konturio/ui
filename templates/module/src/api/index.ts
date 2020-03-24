import client from '@k2-packages/client';
import { IItem } from './types';

export async function fetchData({ text }: { text: string }): Promise<IItem[]> {
  const json = await client.get(`/kcapi/some-endpoint/?${text}`);
  if (Array.isArray(json)) {
    return json;
  }
  return [];
}
