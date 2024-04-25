export const errorHandler = (statusCode, massage) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.errmsg = massage;
  return error;
};
