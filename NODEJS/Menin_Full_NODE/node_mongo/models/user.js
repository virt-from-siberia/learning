const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        requred: true,
    },
    name: {
        type: String,
        required: true,
    },
    //Логиично сдесь хранить корзину
    cart: {
        //Обьекты будем храниить в массиве
        items: [
            {
                //Количество курсов
                сount: {
                    type: Number,
                    required: true,
                    default: 1,
                },
                //Тут будем хранить референцию к какому либо курсу
                //Делаем мвязку между таблицами в бд
                courseId: {
                    type: Schema.Types.ObjectId,
                    //Связываение с таблицей курсов
                    ref: "Course",
                    required: true,
                },
            },
        ],
    },
});
UserSchema.methods.addToCart = function (course) {
    const items = [...this.cart.items];
    const idx = items.findIndex((c) => {
        return c.courseId.toString() === course._id.toString();
    });

    if (idx >= 0) {
        items[idx].count = items[idx].count + 1;
    } else {
        items.push({
            courseId: course._id,
            count: 1,
        });
    }

    // const newCart = {items: clonedItems}
    // this.cart = newCart

    this.cart = { items };
    return this.save();
};

module.exports = model("User", UserSchema);
