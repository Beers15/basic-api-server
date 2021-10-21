'use strict';

module.exports = function(err, req, res, next) {
  if(!/\food/.test(req.path) || /\food\/\d/.test(req.path)) {
    console.log(req.path, 'is not a valid route');
    res.status(404);
    next('404/Not-Found');
  } else {
    if(err) {
      next(err);
    }
    next();
  }
};