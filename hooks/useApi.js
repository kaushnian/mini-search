import { API_URL } from '../constants';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function useApi(query, searchApi) {
  const getUrl = () => {
    if (query === '') return null;

    const url = API_URL[searchApi];

    if (url == null) throw new Error(`Unsupported search API: ${searchApi}`);

    return `${url}${query}`;
  };

  return useSWR(getUrl, fetcher);
}
