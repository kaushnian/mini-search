import List from '@mui/material/List';
import SearchResultItem from './SearchResultItem';
import useApi from '../hooks/useApi';

export default function SearchResults({ query }) {
  const { data, error } = useApi(query);

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
