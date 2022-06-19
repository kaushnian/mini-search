import ImageIcon from '@mui/icons-material/Image';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function SearchResultItem() {
  return (
    <ListItem>
      <ListItemAvatar>
        <ImageIcon />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link href="#" underline="hover" variant="h5">
            Search Result Title
          </Link>
        }
        secondary={
          <>
            <Link
              href="#"
              underline="hover"
              variant="caption"
              color="text.secondary"
            >
              http://search-result.com
            </Link>
            <Typography>Secondary text</Typography>
          </>
        }
      />
    </ListItem>
  );
}
