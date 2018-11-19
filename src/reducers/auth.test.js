import authReducer from './auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123'
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: '123' }, action);
  expect(state).toEqual({});
});