import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChar } from './types';

const initialState: IChar[] | null = null;

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    addChars(state, action: PayloadAction<any>) {
      return action.payload;
    }
  }
});

export const baseActions = baseSlice.actions;
export const baseReducer = baseSlice.reducer;
