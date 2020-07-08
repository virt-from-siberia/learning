const fs = require("fs");
const path = require("path");

class Course {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = new Date().toLocaleDateString();
    }

    toJSON() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id,
        };
    }

    async save() {
        const courses = await Course.getAllFields();
        courses.push(this.toJSON());

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, "..", "data", "courses.JSON"),
                JSON.stringify(courses),
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    static async update(course) {
        const courses = await Course.getAllFields();

        const indx = courses.findIndex((c) => c.id === course.id);
        courses[indx] = course;

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, "..", "data", "courses.JSON"),
                JSON.stringify(courses),
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    static getAllFields() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, "..", "data", "courses.JSON"),
                "utf-8",
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(content));
                    }
                }
            );
        });
    }

    static async getById(id) {
        const courses = await Course.getAllFields();
        return courses.find((c) => c.id === id);
    }
}

module.exports = Course;
