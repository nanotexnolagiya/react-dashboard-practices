export const createLocaleManager = <Locale extends string>(locales: Locale[], current: Locale) => {
  const getLocales = () => locales;

  const getCurrent = () => current;

  const setCurrent = (locale: Locale) => {
    current = locale;
  };

  return { getLocales, getCurrent, setCurrent };
};
