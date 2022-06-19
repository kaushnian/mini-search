import { API_URL } from '../constants';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function useApi(query, searchApi) {
  const getUrl = () => {
    if (query === '') return null;

    return `/api/${searchApi}?query=${query}`;
  };

  return useSWR(getUrl, fetcher);
}
