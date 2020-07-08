const { Schema, model } = require("mongoose");

const course = new Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: String,
    //Какой пользовательдобавил этот курc
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = model("Course", course);
