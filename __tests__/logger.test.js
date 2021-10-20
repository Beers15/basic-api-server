'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logging middleware', () => {
  let req = {method: 'GET', path: '/person'};
  let res = {};
  let next = jest.fn(); //a jest "spy"
  console.log = jest.fn();

  it('should be able to log a method', () => {
    // actually use our logger
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET /person');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a different method is called', () => {
    req.method = 'PUT';

    logger(req, res, next);
    expect(next).toHaveBeenCalledWith('Invalid request made');
  });
});