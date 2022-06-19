import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchQuery({ onChange }) {
  const handleSubmit = event => {
    event.preventDefault();

    onChange(event.target.elements.query.value);
  };

  return (
    <Box sx={{ pl: 8 }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{ width: 500 }}
          name="query"
          InputProps={{
            placeholder: 'Search...',
            startAdornment: (
              <InputAdornment sx={{ mr: 1 }} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Clear">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
}
