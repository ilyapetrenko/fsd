import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export const Char = ({ char }: { char: any }) => {
    return (
        <Box m={5}>
            <Card>
                <CardMedia
                    component="img"
                    alt={char?.name}
                    image={char?.image}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {char.name}
                    </Typography>
                    <Typography color="text.secondary">{char.status}</Typography>
                    <Typography color="text.secondary">{char.species}</Typography>
                    <Typography color="text.secondary">{char.gender}</Typography>
                    <Typography color="text.secondary">{char.location.name}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};
