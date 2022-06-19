import List from '@mui/material/List';
import SearchResultItem from './SearchResultItem';

export default function SearchResults({ query }) {
  return (
    <List>
      <SearchResultItem />
      <SearchResultItem />
    </List>
  );
}
