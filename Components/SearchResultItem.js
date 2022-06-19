import Image from 'next/image';
import ImageIcon from '@mui/icons-material/Image';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

export default function SearchResultItem({
  title,
  link,
  secondaryText,
  imageSrc,
}) {
  return (
    <ListItem>
      <ListItemAvatar>
        {imageSrc ? (
          <Image
            src={imageSrc}
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
            {title}
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
            {secondaryText && <span>{secondaryText}</span>}
          </>
        }
      />
    </ListItem>
  );
}
