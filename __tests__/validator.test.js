const validator = require('../src/middleware/validator.js');

describe('Testing the validation middleware', () => {
  it(' ', () =>  {});
  let req = {method: 'POST', path: '/food', body: {}};
  let res = {};
  let next = jest.fn(); //a jest "spy"
  console.log = jest.fn();

  it('Should be able to validate that a proper body was passed in with a POST request', () => {
    validator(req, res, next);

    expect(console.log).toHaveBeenCalledWith('Either the title or the description was not provided in request body');
    expect(next).toHaveBeenCalled();
  });
  it('Should be able to validate that a proper body was passed in with a PUT request', () => {
    req.method = 'PUT';
    validator(req, res, next);

    expect(console.log).toHaveBeenCalledWith('Either the title or the description was not provided in request body');
    expect(next).toHaveBeenCalled();
  });
});