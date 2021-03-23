export const createMessages = <Key extends string, Locale extends string>(
  _locales: Locale[],
  messages: Record<Key, string | Partial<{ [key in Locale]: string }>>
) => (key: Key, locale: Locale) => {
  const message: string | Partial<{ [key in Locale]: string }> = messages[key];

  return typeof message === 'string' ? message : message[locale];
};
