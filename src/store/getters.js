export const getLoaderState = state => state.LoaderState;
export const getAuthState = state => state.isAuthorized;
export const getEmail = state => state.email;
export const getUserSignUp = state => state.isSignedUp;
export const getPassword = state => state.password;
export const getUserDetail = state => state.UserDetail;
export const getIsAdmin = state => state.isAdmin;
export const cartLength = state => state.Carts.length;