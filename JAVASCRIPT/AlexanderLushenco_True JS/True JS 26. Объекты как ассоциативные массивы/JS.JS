const hotel = {

    "name": "zabaikalye",
    "stars": 3,
    "reclama": function () {
        console.log(this.name + " hotel has " + this.stars);
    }
};

console.log(hotel.name);
hotel.reclama();
hotel.name = "chita";
console.log(hotel.name);
hotel.reclama();