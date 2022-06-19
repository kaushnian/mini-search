import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';

export default function SearchQuery({ onChange }) {
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    onChange(encodeURIComponent(inputRef.current.value));
  };

  const clear = () => {
    inputRef.current.value = '';
    onChange('');
  };

  return (
    <Box sx={{ pl: 8 }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{ width: 500 }}
          name="query"
          inputRef={inputRef}
          InputProps={{
            placeholder: 'Search...',
            startAdornment: (
              <InputAdornment sx={{ mr: 1 }} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={clear} aria-label="Clear">
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
