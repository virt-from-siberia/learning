const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", async (req, res) => {
    //Метод find() -> если оставить без параметром, то будет вытаскивать все курсы которые есть в базе данных
    const courses = await Course.find()
        .populate("userId", "email name")
        .select("price title img");

    console.log(courses);

    res.render("courses", {
        title: "Курсы",
        isCourses: true,
        courses,
    });
});

router.get("/:id/edit", async (req, res) => {
    if (!req.query.allow) {
        return res.redirect("/");
    }

    const course = await Course.findById(req.params.id);

    res.render("course-edit", {
        title: `Редактировать ${course.title}`,
        course,
    });
});

router.post("/remove", async (req, res) => {
    try {
        await Course.deleteOne({
            _id: req.body.id,
        });
        res.redirect("/courses");
    } catch (error) {
        console.log(error);
    }
});

router.post("/edit", async (req, res) => {
    const { id } = req.body;
    //удоляем поле id у request  что бы не попало в бд
    delete req.body.id;

    await Course.findByIdAndUpdate(id, req.body);
    res.redirect("/courses");
});

router.get("/:id", async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.render("course", {
        layout: "empty",
        title: `Курс ${course.title}`,
        course,
    });
});

module.exports = router;
