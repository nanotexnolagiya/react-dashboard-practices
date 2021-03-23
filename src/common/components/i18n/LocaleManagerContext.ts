import { createContext } from 'react';
import { localeManager } from '../../i18n/localeManager';

export const LocaleManagerContext = createContext(localeManager);
