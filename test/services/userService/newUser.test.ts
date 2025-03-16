import UserModel from '../../../src/models/tables/UserModel';
import UserService from '../../../src/services/userService';

const mockUser = {
  name: 'test',
  email: 'test@test.com',
};

const mockDbUser = {
  name: 'test',
  email: 'test@test.com',
  id: 1,
  createdAt: '2021-05-01T00:00:00.000Z',
  updatedAt: '2021-05-01T00:00:00.000Z',
};

const mockInsertNewUser = jest
  .fn()
  .mockResolvedValueOnce(mockDbUser)
  .mockRejectedValueOnce('Error from UserModel');

jest.mock('../../../src/models/tables/UserModel');

describe('Test new user creation method', () => {
  beforeEach(() => {
    UserModel.insertNewUser = mockInsertNewUser;
  });

  it('should return the correct response', async () => {
    const data = await UserService.newUser(mockUser);
    expect(data).toEqual(mockDbUser);
  });

  it('should return an error when insert new user didnt execute as expected', async () => {
    try {
      await UserService.newUser(mockUser);
    } catch (err) {
      expect(err).toEqual('Error from UserModel');
    }
  });
});
