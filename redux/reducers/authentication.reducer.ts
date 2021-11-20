import { userConstants } from "../constants/user_constants";

const initialState = {
    loggingIn: false,
  user: {},
};

export function authentication(
  state = initialState,
  action: { type: any; user: any; error: any }
) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
