module.exports.dbErrorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const errors = Object.keys(err.errors).map(key => ({
      status: 422,
      title: err.errors[key].message,
    }));
    return res.status(422).json({ errors });
  }

  if (err.name === 'MongoServerError' && err.code === 11000) {
    return res.status(409).json({
      status: 409,
      message: 'Duplicate key error',
      key: Object.keys(err.keyValue)[0],
    });
  }

  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;

  res.status(status).send({
    errors: [
      {
        status,
        title: err.message ?? 'Server Error',
      },
    ],
  });
};
