'use strict';

module.exports = function(req, res, next) {
  if(req.method === 'POST' || req.method === 'PUT') {
    if(!req.body.title && !req.body.name) {
      console.log('Either the title or the description was not provided in request body');
      next('Either the title or the description was not provided in request body');
    }
    next();
  } else {
    next();
  }
};
