const {CustomAPIError} = require('../error/custom-error');
const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.status).json({
            success: false,
            message: err.message
        });
    }
    return res.status(500).json({
        success: false,
        message: 'Something went wrong, please try again later'
    });
}
module.exports = errorHandlerMiddleware;