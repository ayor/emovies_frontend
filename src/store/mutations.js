export const UPDATE_LOADER = (state, payload) => state.LoaderState = payload;
export const USER_IS_AUTHORIZED = (state, payload) => state.isAuthorized = payload;
export const USER_IS_ADMIN = (state, payload) => state.isAdmin = payload;
export const UPDATE_USER_EMAIL = (state, payload) => state.email = payload;
export const USER_IS_SIGNED_UP = (state, payload) => state.isSignedUp = payload;
export const UPDATE_USER_PASSWORD = (state, payload) => state.password = payload;
export const UPDATE_USER_DETAIL = (state, payload) => state.UserDetail = { ...state.UserDetail, ...payload }; 