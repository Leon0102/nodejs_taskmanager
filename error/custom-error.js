
class CustomAPIError extends Error {
  constructor(message, status, code) {
    super(message, status, code);
  }
}
const createCustomAPIError = (message, status, code) => {
  return new CustomAPIError(message, status, code);
}

module.exports = {
    createCustomAPIError,
    CustomAPIError,
};