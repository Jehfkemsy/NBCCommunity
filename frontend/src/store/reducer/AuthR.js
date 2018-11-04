const authInitState = {
  auth: true,
  auth_err: false
};

function AuthR(state = authInitState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, auth: true };
    case 'SIGNUP_ERR':
      return { ...state, auth_err: 'Sign up failed' };
    case 'LOGIN_ERR':
      return { ...state, auth_err: 'Login failed' };
    case 'LOGOUT':
      return { ...state, auth: false };
    default:
      return state;
  }
}

export default AuthR;
