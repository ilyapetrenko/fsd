import { useEffect } from "react";
import { Box } from "@mui/material";
import { IChar, useSearchCharsQuery } from "../../shared/api";
import { useActions, useAppSelector } from "../../shared/model";
import { Char } from "../../entities/Char";

export const CharList = () => {
    const { data } = useSearchCharsQuery(10);
    const currentChars: IChar[] | null = useAppSelector((state) => state.base);
    const { addChars } = useActions();

    useEffect(() => {
        addChars(data);
    }, [data]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginY: '3rem', justifyContent: 'center' }}>
            {currentChars &&
                (currentChars as IChar[]).map((char) => (
                    <Char key={char.id} char={char} />
                ))}
        </Box>
    );
};
