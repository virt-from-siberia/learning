const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", (req, res) => {
    res.render("add", {
        title: "Добавить курс",
        isAdd: true,
    });
});

router.post("/", async (req, res) => {
    // const course = new Course(req.body.title, req.body.price, req.body.img)
    const course = new Course({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        //Передаем _id пользователя в схему для связывание с таблицей
        userId: req.user._id,
    });

    try {
        await course.save();
        res.redirect("/courses");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
