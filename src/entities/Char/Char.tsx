import { Card, CardContent, CardMedia, Box } from '@mui/material';
import { CustomTypography } from '../../shared/ui/CustomTypography';

export const Char = ({ char }: { char: any }) => {
  return (
    <Box m={5}>
      <Card sx={{ backgroundColor: '#f4f6f8' }}>
        <CardMedia component="img" alt={char?.name} image={char?.image} />
        <CardContent sx={{ width: '20rem', height: '9rem' }}>
          <CustomTypography variant="h5">{char.name}</CustomTypography>
          <CustomTypography>{char.status}</CustomTypography>
          <CustomTypography>{char.species}</CustomTypography>
          <CustomTypography>{char.gender}</CustomTypography>
          <CustomTypography>{char.location.name}</CustomTypography>
        </CardContent>
      </Card>
    </Box>
  );
};
