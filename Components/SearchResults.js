import List from '@mui/material/List';
import SearchResultItem from './SearchResultItem';
import useApi from '../hooks/useApi';

export default function SearchResults({ query, searchApi }) {
  const { data, error } = useApi(query, searchApi);

  console.log(data);

  return (
    <List>
      {data &&
        !error &&
        data.items.map(item => (
          <SearchResultItem key={item.question_id} data={item} />
        ))}
    </List>
  );
}
