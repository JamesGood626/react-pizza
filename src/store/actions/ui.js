export const TOGGLE_LOADER = "TOGGLE_LOADER";

export const toggleLoader = ({ loaderVisible = false, trigger }) => ({
  type: TOGGLE_LOADER,
  payload: loaderVisible,
  meta: { trigger }
});
