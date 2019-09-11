const setOptions = (options: $TSFixMe): void => {
  const localStorage = window.localStorage;
  localStorage.setItem('options', JSON.stringify(options));
};

const getOptions = (): string => {
  const options = window.localStorage.getItem('options');
  if (typeof options === 'string') {
    return JSON.parse(options);
  }
  return 'Something wrong';
};

export { setOptions, getOptions };
