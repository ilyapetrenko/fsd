import { useState, useEffect } from 'react';
import { useSearchCharsQuery } from '../shared/api';
import { useActions } from '../shared/model';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';

interface FilterState {
  alive: boolean;
  human: boolean;
}

export const Filter = () => {
  const { data } = useSearchCharsQuery(9);
  const { addChars } = useActions();
  const [filterState, setFilterState] = useState<FilterState>({
    alive: false,
    human: false,
  });

  useEffect(() => {
    if (data != null) {
      addChars(data);
    }
  }, [data]);

  const applyFilters = () => {
    let filteredData = data ?? [];

    if (filterState.alive) {
      filteredData = filteredData.filter((char) => char.status === 'Alive');
    }

    if (filterState.human) {
      filteredData = filteredData.filter((char) => char.species === 'Human');
    }

    addChars(filteredData);
  };

  const toggleFilter = (filter: keyof FilterState) => {
    setFilterState((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const showAll = () => {
    setFilterState({ alive: false, human: false });
    if (data != null) {
      addChars(data);
    }
  };

  return (
    <Box
      m={5}
      sx={{ marginTop: '6rem', display: 'flex', justifyContent: 'center' }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={filterState.alive}
            onChange={() => {
              toggleFilter('alive');
            }}
          />
        }
        label="Alive"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={filterState.human}
            onChange={() => {
              toggleFilter('human');
            }}
          />
        }
        label="Human"
      />

      <Button
        sx={{ marginX: '1rem' }}
        variant="contained"
        onClick={applyFilters}
      >
        Apply
      </Button>
      <Button variant="contained" onClick={showAll}>
        Show All
      </Button>
    </Box>
  );
};
