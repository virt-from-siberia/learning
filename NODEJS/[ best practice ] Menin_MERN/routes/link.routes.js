const { Router } = require("express");
const Link = require("../models/Link");
const authMiddleware = require("../middleware/auth.middleware");
const baseURL = require("../baseURL");
const shortid = require("shortid");
const router = Router();

//NOTE/: перехват запроса для обработки токена authMiddleware!!!
router.post("/generate", authMiddleware, async (req, res) => {
    try {
        const { from } = req.body;
        const code = shortid.generate();

        const existing = await Link.findOne({ from: from });

        if (existing) {
            return res.json({ link: existing });
        }

        const to = baseURL + "/t/" + code;

        const link = new Link({
            code,
            to,
            from,
            owner: req.user.userId,
        });

        await link.save();

        res.status(201).json({ link: link });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong, try again",
        });
    }
});

//NOTE/: перехват запроса для обработки токена authMiddleware!!!
router.get("/", authMiddleware, async (req, res) => {
    try {
        //NOTE/: обрашяемся к базе, ишем все ссылки которые относятся к текушему пользователю
        const links = await Link.find({ owner: req.user.userId }); ///???

        res.json(links);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong, try again",
        });
    }
});

//NOTE/: перехват запроса для обработки токена authMiddleware!!!
router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id);

        res.json(link);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong, try again",
        });
    }
});

module.exports = router;
