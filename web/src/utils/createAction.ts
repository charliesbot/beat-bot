type Options = {
  payload?: object;
  error?: Error;
  meta?: object;
};

const createAction = (type: string, options: Options = {}) => {
  const actionCreator = (payload: object = {}) => {
    if (!type || typeof type !== "string" || !type.length) {
      throw new Error(
        "createAction: type cannot be null, must be a string, and cannot be empty."
      );
    }

    const { meta, error } = options;

    return {
      type,
      payload,
      error,
      meta
    };
  };

  actionCreator.TYPE = type;
  return actionCreator;
};

export default createAction;
