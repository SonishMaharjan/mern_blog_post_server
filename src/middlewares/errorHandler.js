function genericErrorHandler(err, req, res, next) {
    res.status(err.code).json(err)
}

module.exports = {
    genericErrorHandler
}