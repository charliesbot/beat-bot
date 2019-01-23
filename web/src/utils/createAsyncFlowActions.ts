import createAction from "./createAction";

enum AsyncActionNames {
  REQUESTED = "REQUESTED",
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED"
}

const createAsyncFlowActions = (baseType: string) => {
  return {
    request: createAction(`${AsyncActionNames.REQUESTED}_${baseType}`),
    started: createAction(`${AsyncActionNames.STARTED}_${baseType}`),
    completed: createAction(`${AsyncActionNames.COMPLETED}_${baseType}`),
    failed: createAction(`${AsyncActionNames.FAILED}_${baseType}`),
    cancelled: createAction(`${AsyncActionNames.CANCELLED}_${baseType}`)
  };
};

export default createAsyncFlowActions;
