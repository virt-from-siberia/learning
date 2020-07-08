const express = require("express");
const mongoose = require("mongoose");
const cfg = require("./dbCofig");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/link", require("./routes/link.routes"));
app.use("/t/", require("./routes/redirect.routes"));

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client", "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

async function start() {
    try {
        await mongoose.connect(cfg, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        app.listen(PORT, () => {
            console.log(`:::SERVER HAS BEEN STARTED ON PORT  : ${PORT}:::`);
        });
    } catch (err) {
        console.log(err);
    }
}

start();
