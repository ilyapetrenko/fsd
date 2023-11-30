import { useEffect } from 'react';
import { Box } from '@mui/material';
import { IChar, useSearchCharsQuery } from '../../../shared/api';
import { useActions, useAppSelector } from '../../../shared/model';
import { Char } from '../../../entities/Char';
import { Filter } from '../../../features/Filter';

export const CharList = () => {
  const { data } = useSearchCharsQuery(9);
  const currentChars: IChar[] | null = useAppSelector((state) => state.base);
  const { addChars } = useActions();

  useEffect(() => {
    addChars(data);
  }, [data]);

  return (
    <>
      <Filter />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          marginY: '1rem',
          justifyContent: 'center',
        }}
      >
        {currentChars?.map((char) => <Char key={char.id} char={char} />)}
      </Box>
    </>
  );
};
