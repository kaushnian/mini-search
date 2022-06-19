import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchQuery() {
  return (
    <Box sx={{ pt: 2, pb: 2, display: 'flex', justifyContent: 'center' }}>
      <form autoComplete="off">
        <TextField
          sx={{ width: 500 }}
          id="query-input"
          InputProps={{
            placeholder: 'Search...',
            startAdornment: (
              <InputAdornment sx={{ mr: 1 }}>
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
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
