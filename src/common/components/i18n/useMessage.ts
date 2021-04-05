import { MessagesContext } from './MessagesContext';
import { State } from '../../store';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

export const useMessage = () => {
  const locale = useSelector((state: State) => state.locale);
  const message = useContext(MessagesContext);

  return (key: Parameters<typeof message>[0]) => {
    return message(key, locale) || key;
  };
};
