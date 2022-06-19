import Image from 'next/image';
import ImageIcon from '@mui/icons-material/Image';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { decode } from 'he';

export default function SearchResultItem({ data: { title, link, owner } }) {
  return (
    <ListItem>
      <ListItemAvatar>
        {owner.profile_image ? (
          <Image
            src={owner.profile_image}
            alt="Picture of the author"
            width={32}
            height={32}
          />
        ) : (
          <ImageIcon />
        )}
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link href={link} underline="hover" variant="h6" target="_blank">
            {decode(title)}
          </Link>
        }
        secondary={
          <>
            <Link
              href={link}
              underline="hover"
              variant="caption"
              color="text.secondary"
              target="_blank"
            >
              {link}
            </Link>
            <br />
            <span>
              Author:{' '}
              <Link href={owner.link} underline="hover" target="_blank">
                {owner.display_name}
              </Link>
            </span>
          </>
        }
      />
    </ListItem>
  );
}
