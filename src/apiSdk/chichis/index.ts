import queryString from 'query-string';
import { ChichiInterface, ChichiGetQueryInterface } from 'interfaces/chichi';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChichis = async (query?: ChichiGetQueryInterface): Promise<PaginatedInterface<ChichiInterface>> => {
  return fetcher('/api/chichis', {}, query);
};

export const createChichi = async (chichi: ChichiInterface) => {
  return fetcher('/api/chichis', { method: 'POST', body: JSON.stringify(chichi) });
};

export const updateChichiById = async (id: string, chichi: ChichiInterface) => {
  return fetcher(`/api/chichis/${id}`, { method: 'PUT', body: JSON.stringify(chichi) });
};

export const getChichiById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/chichis/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteChichiById = async (id: string) => {
  return fetcher(`/api/chichis/${id}`, { method: 'DELETE' });
};
