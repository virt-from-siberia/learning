const { Router } = require("express");
const Todo = require("../model/todo");
const router = Router();

router.get("/", async (req, res) => {
    const todos = await Todo.find();

    //FIXME: CONSOLE LOG ===========>
    console.log(todos);

    res.render("index", {
        title: "Todos List",
        isIndex: true,
        todos,
    });
});

router.get("/create", (req, res) => {
    res.render("create", {
        title: "Create Todo",
        isCreate: true,
    });
});

router.post("/create", async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
    });

    await todo.save();
    res.redirect("/");
});

module.exports = router;
