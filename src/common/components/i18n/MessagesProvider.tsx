import React, { ComponentType } from 'react';

import { MessagesContext } from './MessagesContext';
import { messages } from '../../i18n/messages';

export const MessagesProvider: ComponentType = (props) => (
  <MessagesContext.Provider value={messages}>{props.children}</MessagesContext.Provider>
);
