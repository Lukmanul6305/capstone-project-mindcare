import jwt from "jsonwebtoken";

const jwtUtils = {
    generateAccessToken: (payload) => {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "15m"
        });
    },

    generateRefreshToken: (payload) => {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        });
    },

    verifyAccessToken: (token) => {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    },

    verifyRefreshToken: (token) => {
        return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    }
};

export default jwtUtils;