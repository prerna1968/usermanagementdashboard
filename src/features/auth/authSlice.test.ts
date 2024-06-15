import { loginUser } from './authApi';
import authReducer, { login, logout } from './authSlice';

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual({
      isAuthenticated: false,
      token: null,
    });
  });

  it('should handle login', () => {
    const actual = authReducer(undefined, login('fakeToken'));
    expect(actual.isAuthenticated).toEqual(true);
    expect(actual.token).toEqual('fakeToken');
  });

  it('should handle logout', () => {
    const actual = authReducer({ isAuthenticated: true, token: 'fakeToken' }, logout());
    expect(actual.isAuthenticated).toEqual(false);
    expect(actual.token).toEqual(null);
  });

  it('should fail login with invalid email', async () => {
    const email = 'invalidemail';
    const password = 'password';
    await expect(loginUser(email, password)).rejects.toThrow('Invalid email');
  });
  
});
