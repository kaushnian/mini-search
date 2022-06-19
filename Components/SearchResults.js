import List from '@mui/material/List';
import SearchResultItem from './SearchResultItem';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const key = 'key=U4DMV*8nvpm3EOpvf69Rxw((';
const params = '&site=stackoverflow';
const url = `https://api.stackexchange.com/2.3/search?${key}${params}&intitle=`;

export default function SearchResults({ query }) {
  const { data, isValidating } = useSWR(
    query !== '' && `${url}${query}`,
    fetcher
  );

  console.log(data);

  return (
    <>
      <List>
        <SearchResultItem />
        <SearchResultItem />
      </List>
    </>
  );
}
