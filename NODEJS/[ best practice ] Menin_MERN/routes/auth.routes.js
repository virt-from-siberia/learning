const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

//Important_NOTE///:"  /api/auth/register
router.post(
    "/register",
    //NOTE/: массив middleware
    //NOTE/: проверка валидации
    [
        check("email", "Некорректный email").isEmail(),
        check("password", "Минимальная длина пароля 6 символов").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        //FIXME: CONSOLE LOG ===========>
        console.log("looool");
        console.log(req.body);
        try {
            //FIXME: CONSOLE LOG ===========>
            console.log(("Body : ", req.body));

            //NOTE/: Обработка express-validator
            const errors = validationResult(req);
            //NOTE/: проверка валидатора если есть ошибки
            if (!errors.isEmpty()) {
                //NOTE/: передаем ошибки на фронт
                return res.status(400).json({
                    //NOTE/: собираем ошибки в массив
                    errors: errors.array(),
                    message: "Некоректные данные при регистрации",
                });
            }

            const { email, password } = req.body;

            //NOTE/: проверяем есть ли уже такой email в бд
            const candidate = await User.findOne({ email: email });

            if (candidate) {
                return res.status(400).json({ message: "User already exist" });
            }
            //NOTE/: хешируем пароль асинхронно
            const hasPassword = await bcrypt.hash(password, 12);
            //NOTE/: создаем нового пользователя
            const user = new User({
                email: email,
                password: hasPassword,
            });

            //NOTE/: сохраняем в бд асинхронно
            await user.save();
            //NOTE/: ответ успешно
            res.status(201).json({
                message: "User created",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong, try again",
            });
        }
    }
);

//Important_NOTE///:"  /api/auth/login
router.post(
    "/login",
    [
        //NOTE/: массив middleware
        //NOTE/: проверка валидации
        check("email", "Введите коректный email").normalizeEmail().isEmail(),
        check("password", "Введите пароль").exists(),
    ],
    async (req, res) => {
        try {
            //NOTE/: Обработка express-validator
            const errors = validationResult(req);
            //NOTE/: проверка валидатора если есть ошибки
            if (!errors.isEmpty()) {
                //NOTE/: передаем ошибки на фронт
                return res.status(400).json({
                    //NOTE/: собираем ошибки в массив
                    errors: errors.array(),
                    message: "Некоректные данные при входе в систему",
                });
            }

            //NOTE/: получаем поля из реквеста
            const { email, password } = req.body;

            //NOTE/: ишем пользователя по email асинхронно
            const user = await User.findOne({ email: email });
            //FIXME: CONSOLE LOG ===========>
            console.log(user);

            //NOTE/: если пользователь не найден
            if (!user) {
                return res.status(400).json({
                    message: "Пользователь не найден",
                });
            }

            //NOTE/: проверка совподают ли пароли асинхронно
            //NOTE/: 1й параметр пароль с фронта, второй с бд
            const isMatch = await bcrypt.compare(password, user.password);

            //NOTE/: если пароли не совподают

            if (!isMatch) {
                return res.status(400).json({
                    messages: "Password is invalid, try again",
                });
            }

            //NOTE/: авторизируем пользователя
            //NOTE/: создаем токен
            const token = jwt.sign(
                //NOTE/: первый параметр данные которые будем зашифровывать в jwt токене
                { userId: user.id },
                //NOTE/: Втотой параметр передает секретный ключь JWTSecret
                "Aleksey Elchin",
                //NOTE/: Третий параметр, через сколько данный токен закончит свое сушествование
                { expiresIn: "7d" }
            );

            //NOTE/: Все прошло успешно
            //NOTE/: В ответе передаем token
            res.json({
                token: token,
                userId: user.id,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong, try again",
            });
        }
    }
);

module.exports = router;
