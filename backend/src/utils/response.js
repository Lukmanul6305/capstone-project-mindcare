const response = {
    success: (res, statusCode = 200, msg, data = null) => {
        return res.status(statusCode).json({
            success: true,
            msg,
            payload: {...data}
        });
    },
    failed: (res, statusCode = 400, msg, errors = null) => {
        return res.status(statusCode).json({
            success: false,
            msg,
            ...(errors && { errors })
        });
    }
};

export default response;