import { AuthenticationGuard } from './AuthGuard';

describe('AuthenticationGuard', () => {
  it('should create an instance', () => {
    expect(new AuthenticationGuard()).toBeTruthy();
  });
});