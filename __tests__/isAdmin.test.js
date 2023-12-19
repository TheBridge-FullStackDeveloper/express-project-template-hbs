const isAdmin = require('../middlewares/isAdmin');

describe('isAdmin Middleware', () => {
  it('should call next() if user is admin', () => {
    const req = {
      user: { isAdmin: true }
    };
    const res = {};
    const next = jest.fn();

    isAdmin(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should redirect if user is not admin', () => {
    const req = {
      user: { isAdmin: false }
    };
    const res = { redirect: jest.fn() };
    const next = jest.fn();

    isAdmin(req, res, next);

    expect(res.redirect).toHaveBeenCalledWith('/');
    expect(next).not.toHaveBeenCalled();
  });

  it('should redirect if user is not defined', () => {
    const req = {};
    const res = { redirect: jest.fn() };
    const next = jest.fn();

    isAdmin(req, res, next);

    expect(res.redirect).toHaveBeenCalledWith('/');
    expect(next).not.toHaveBeenCalled();
  });
});
