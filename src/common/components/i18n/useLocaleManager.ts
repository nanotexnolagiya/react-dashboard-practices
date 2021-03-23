import { useContext } from 'react';
import { LocaleManagerContext } from './LocaleManagerContext';

export const useLocaleManager = () => {
  return useContext(LocaleManagerContext);
};
