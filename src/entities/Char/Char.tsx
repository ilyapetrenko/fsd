import { Card, CardContent, CardMedia, Box } from '@mui/material';
import { CustomTypography } from "../../shared/ui/CustomTypography";

export const Char = ({ char }: { char: any }) => {
  return (
      <Box m={5}>
        <Card sx={{ backgroundColor: '#f4f6f8' }}>
          <CardMedia component="img" alt={char?.name} image={char?.image} />
          <CardContent sx={{ width: '10rem', height: '13rem' }}>
            <CustomTypography variant="h5">
              {char.name}
            </CustomTypography>
            <CustomTypography color="text.secondary" style={{ fontWeight: 'bold' }}>
              {char.status}
            </CustomTypography>
            <CustomTypography color="text.secondary" style={{ fontWeight: 'bold' }}>
              {char.species}
            </CustomTypography>
            <CustomTypography color="text.secondary" style={{ fontWeight: 'bold' }}>
              {char.gender}
            </CustomTypography>
            <CustomTypography color="text.secondary" style={{ fontWeight: 'bold' }}>
              {char.location.name}
            </CustomTypography>
          </CardContent>
        </Card>
      </Box>
  );
};
