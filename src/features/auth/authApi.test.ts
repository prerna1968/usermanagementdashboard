import axios from 'axios';
import { loginUser, registerUser } from './authApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('authApi', () => {
  it('should login user', async () => {
    const data = { token: 'fakeToken' };
    mockedAxios.post.mockResolvedValue({ data });
    const response = await loginUser('test@test.com', 'password');
    expect(response).toEqual(data);
  });

  it('should register user', async () => {
    const data = { id: 1, token: 'fakeToken' };
    mockedAxios.post.mockResolvedValue({ data });
    const response = await registerUser('test@test.com', 'password');
    expect(response).toEqual(data);
  });
});
