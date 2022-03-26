const CustomAPIError = require('./custom-api');
const BadRequestError = require('./badrequest');
const NotFoundError = require('./not-found');
const UnauthorizedError = require('./unauthorized');
const UnauthenticatedError = require('./unauthorized');

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  UnauthenticatedError,
};
