// import jwt from 'jsonwebtoken';

// const authMiddleWare = async (req, res, next) => {
//     const { token } = req.headers;
//     if (!token) {
//         return res.json({ success: false, message: "Not Authorised. Login Again." });
//     }

//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.userId = token_decode.id; // ✅ Use safe assignment
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Invalid Token" });
//     }
// };

// export default authMiddleWare;


import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.json({ success: false, message: "Not Authorised. Login Again." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;
