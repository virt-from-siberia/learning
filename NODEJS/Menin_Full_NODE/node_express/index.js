const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const homeRoutes = require("./routes/home");
const cartRoute = require("./routes/cart");
const addRoutes = require("./routes/add");
const homeCourses = require("./routes/courses");

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);

app.use("/add", addRoutes);

app.use("/courses", homeCourses);

app.use("/card", cartRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`SERVER HAS BEEN STARTED ON PORT ${PORT}`);
});
