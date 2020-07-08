const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const cardRoutes = require("./routes/card");
const addRoutes = require("./routes/add");
const coursesRoutes = require("./routes/courses");
const User = require("./models/user");

const app = express();

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(async (req, res, next) => {
    try {
        const user = await User.findById("5edfaf6d9efaa457608ade91");
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/courses", coursesRoutes);
app.use("/card", cardRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        const url = `mongodb+srv://Aleksey:SamsungS8@cluster0-7uuld.azure.mongodb.net/NODEFULL`;
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        const candidate = await User.findOne();

        if (!candidate) {
            const user = new User({
                name: "Aleksey",
                email: "aleksey@mail.ru",
                cart: { items: [] },
            });
            await user.save();
        }
    } catch (err) {
        console.log(err);
    }
}

start();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
