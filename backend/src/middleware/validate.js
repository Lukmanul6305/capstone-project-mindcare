export const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((d) => ({
            field: d.context.key,
            message: d.message
        }));
        return res.status(422).json({ success: false, msg: "Validasi gagal.", errors });
    }
    next();
};