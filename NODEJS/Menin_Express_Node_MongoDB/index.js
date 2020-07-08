const express = require("express");
const mongoose = require("mongoose");
const cfg = require("./dbCofig");
const PORT = process.env.PORT || 3003;
const bodyParser = require("body-parser");
//NOTE/: Шаблонизатор HandleBars
var exphbs = require("express-handlebars");

//NOTE/: Подключение роутов
const todoRoutes = require("./routes/todos");

const app = express();

//NOTE/: Шаблонизатор HandleBars
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
});

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect(
            //NOTE/: mongodb url connect
            cfg,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
        app.listen(PORT, () => {
            //FIXME: CONSOLE LOG ===========>
            console.log(`Server has been started on port : ${PORT}`);
        });
    } catch (err) {
        //FIXME: CONSOLE LOG ===========>
        console.log(err);
    }
}

start();
