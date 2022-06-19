import List from '@mui/material/List';
import SearchResultItem from './SearchResultItem';
import useApi from '../hooks/useApi';

export default function SearchResults({ query, searchApi }) {
  const { data, error } = useApi(query, searchApi);

  if (!data) return;
  if (error) return 'An error occurred while fetching the data';
  if (data.length === 0) return 'No results';

  return (
    <List>
      {data.map(item => (
        <SearchResultItem key={item.id} {...item} />
      ))}
    </List>
  );
}
