import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChar } from '../../shared/api';

const initialState: IChar[] | null = null;

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    addChars(_, action: PayloadAction<any>) {
      return action.payload;
    },
  },
});

export const baseActions = baseSlice.actions;
export const baseReducer = baseSlice.reducer;
