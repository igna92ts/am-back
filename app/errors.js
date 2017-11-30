exports.default = message => {
  return {
    statusCode: 500,
    message
  };
};

exports.missing = message => {
  return {
    statusCode: 404,
    message
  };
};