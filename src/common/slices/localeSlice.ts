import { createSlice } from '@reduxjs/toolkit';
import { localeManager } from '../i18n/localeManager';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: localeManager.getCurrent(),
  reducers: {},
});
