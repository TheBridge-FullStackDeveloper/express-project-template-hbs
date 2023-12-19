const isAuthenticated = require('../middlewares/isAuthenticated');

describe('isAuthenticated Middleware', () => {
  it('should call next() if user is authenticated', () => {
    const req = {
      user: {}
    };
    const res = {
      redirect: jest.fn()
    };
    const next = jest.fn();

    isAuthenticated(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalled();
  });

  it('should redirect to login page if user is not authenticated', () => {
    const req = {};
    const res = {
      redirect: jest.fn()
    };
    const next = jest.fn();

    isAuthenticated(req, res, next);

    expect(res.redirect).toHaveBeenCalledWith("/auth/login-page");
    expect(next).not.toHaveBeenCalled();
  });
});
