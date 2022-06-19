import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const key = 'key=U4DMV*8nvpm3EOpvf69Rxw((';
const params = '&site=stackoverflow&pagesize=10';
const url = `https://api.stackexchange.com/2.3/search?${key}${params}&intitle=`;

export default function useApi(query) {
  return useSWR(query !== '' && `${url}${query}`, fetcher);
}
