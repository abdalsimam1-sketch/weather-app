class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
class BadRequestError extends CustomError {
  constructor(message) {
    super(message, 400);
  }
}
class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404);
  }
}

class RateLimitError extends CustomError {
  constructor(message) {
    super(message, 429);
  }
}

class ExternalAPIError extends CustomError {
  constructor(message) {
    super(message, 502);
  }
}

module.exports = {
  CustomError,
  BadRequestError,
  NotFoundError,
  RateLimitError,
  ExternalAPIError,
};
