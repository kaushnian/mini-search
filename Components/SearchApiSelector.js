import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { SEARCH_API } from '../constants';

export default function SearchApiSelector({ selectedValue, onChange }) {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup row name="row-radio-buttons-group">
        <FormControlLabel
          checked={selectedValue === SEARCH_API.STACKOVERFLOW}
          value={SEARCH_API.STACKOVERFLOW}
          onChange={handleChange}
          control={<Radio />}
          label="Stackoverflow"
        />
        <FormControlLabel
          checked={selectedValue === SEARCH_API.SPOTIFY}
          value={SEARCH_API.SPOTIFY}
          onChange={handleChange}
          control={<Radio />}
          label="Spotify"
        />
      </RadioGroup>
    </FormControl>
  );
}
