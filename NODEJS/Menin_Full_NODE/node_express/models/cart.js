const path = require("path");
const fs = require("fs");

const pathToDBJSON = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "cart.JSON"
);

class Card {
    static async add(course) {
        const card = await Card.fetch();

        const indx = card.courses.findIndex((c) => c.id === course.id);
        const candidate = card.courses[indx];

        if (candidate) {
            candidate.count++;
            card.courses[indx] = candidate;
        } else {
            course.count = 1;
            card.courses.push(course);
        }

        card.price += +course.price;

        return new Promise((resolve, reject) => {
            fs.writeFile(pathToDBJSON, JSON.stringify(card), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static async fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(pathToDBJSON, "utf-8", (err, content) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(content));
                }
            });
        });
    }

    static async remove(id) {
        const card = await Card.fetch();

        const idx = card.courses.findIndex((c) => c.id === id);
        const course = card.courses[idx];

        if (course.count === 1) {
            card.courses = card.courses.filter((c) => c.id !== id);
        } else {
            card.courses[idx].count--;
        }

        card.price -= course.price;

        return new Promise((resolve, reject) => {
            fs.writeFile(pathToDBJSON, JSON.stringify(card), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(card);
                }
            });
        });
    }
}

module.exports = Card;
