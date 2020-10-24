export const combineReducers = (config) => {
  return (state, action) => {
    return Object.keys(config).reduce((state, key) => {
      console.log(state);
      console.log(key);
      const reducer = config[key];

      const previouseState = state.get(key);

      const newValue = reducer(previouseState, action);

      if (!newValue) {
        throw new Error(
          `A reducer returned undefined when reducing key:: "${key}"`
        );
      }
      return state.set(key, newValue);
    }, state);
  };
};
