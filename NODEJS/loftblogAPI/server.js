const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var artists = [
    {
        id: 1,
        name: "Metallica",
    },
    {
        id: 2,
        name: "Kino",
    },
    {
        id: 3,
        name: "Alisa",
    },
    {
        id: 4,
        name: "Nirvana",
    },
];

app.get("/artists", (req, res) => {
    db.collection("artists")
        .find()
        .toArray((err, docs) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(docs);
        });
});

app.get("/artists/:id", (req, res) => {
    db.collection("artists").findOne(
        { _id: ObjectID(req.params.id) },
        (err, doc) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(doc);
        }
    );
});

app.get("/", (req, res) => {
    res.send("Hello API");
});

app.post("/artists", (req, res) => {
    const artist = {
        name: req.body.name,
    };

    db.collection("artists").insertOne(artist, (err, result) => {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(artist);
    });
});

app.put("/artists/:id", (req, res) => {
    db.collection("artists").updateOne(
        { _id: ObjectID(req.params.id) },
        { $set: { name: req.body.name } },
        (err, result) => {
            if (err) {
                return res.sendStatus(500);
            }
            res.send("Okey ...");
        }
    );
});

app.delete("/artists/:id", (req, res) => {
    db.collection("artists").deleteOne(
        { _id: ObjectID(req.params.id) },
        { name: req.body.name },
        (err, result) => {
            if (err) {
                return res.sendStatus(500);
            }
            res.send("User deleted ...");
        }
    );
});

MongoClient.connect(
    "mongodb://localhost:27017/myapi",
    { useUnifiedTopology: true },
    function (err, database) {
        if (err) {
            return console.log(err);
        }
        db = database.db("myapi");
        app.listen(3012, () => {
            console.log("API is running");
        });
    }
);

