import React, { ComponentType } from 'react';

import { LocaleManagerContext } from './LocaleManagerContext';
import { localeManager } from '../../i18n/localeManager';

export const LocaleManagerProvider: ComponentType = (props) => (
  <LocaleManagerContext.Provider value={localeManager}>
    {props.children}
  </LocaleManagerContext.Provider>
);
