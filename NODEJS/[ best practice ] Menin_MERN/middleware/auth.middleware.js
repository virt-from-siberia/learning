const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    //FIXME: CONSOLE LOG ===========>
    console.log("middleware");
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        //NOTE/: проверка есть ли токен в хеадаре

        const token = req.headers.authorization.split(" ")[1];
        //NOTE/: если токен не найден
        if (!token) {
            return res.status(401).json({
                message: "Нет авторизации",
            });
        }
        //NOTE/: если есть нужно декодировать
        //NOTE/: вторым параметрам передается секретный ключь который был указан при кодеровке
        const decoded = jwt.verify(token, "Aleksey Elchin");

        //NOTE/: ложим раскодированный токен в обьект реквеста
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Нет авторизации",
        });
    }
};
