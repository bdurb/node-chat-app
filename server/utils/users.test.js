const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Joe',
      room: 'fun time'
    }, {
      id: '2',
      name: 'Jack',
      room: 'not fun time'
    }, {
      id: '3',
      name: 'John',
      room: 'fun time'
    }]
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {id: 1, name: 'joe', room: 'joes room'}
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  it('should return names for fun time room', () => {
    const userList = users.getUserList('fun time');
    expect(userList).toEqual(['Joe', 'John'])
  });
  it('should return names for not fun time room', () => {
    const userList = users.getUserList('not fun time');
    expect(userList).toEqual(['Jack'])
  });
  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2)
  });
  it('should not remove a user', () => {
    const userId = '50';
    const user = users.removeUser(userId);
    expect(user).toBe(undefined);
    expect(users.users.length).toBe(3)
  });
  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });
  it('should not find user', () => {
    const userId = '7';
    const user = users.getUser(userId);
    expect(user).toBe(undefined)
  });
});