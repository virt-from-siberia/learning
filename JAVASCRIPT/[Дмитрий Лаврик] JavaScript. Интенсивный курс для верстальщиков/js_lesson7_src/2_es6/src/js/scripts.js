"use strict";



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function (e) {


    let a = {
        run: function (speed) { 
            speed = speed + 20;
            console.log(speed);
         }
    }
    
   

    var a = { some: 1 };
    var i = 10;

    for (var _i = 0; _i < 100; _i++) {}

    a.some1 = 1;
    console.log(a);
    console.log(i);

    var items = document.querySelectorAll('.items .item');
    var divPrice = document.querySelector('.value');

    for (var _i2 = 0; _i2 < items.length; _i2++) {
        items[_i2].onclick = function () {
            this.classList.toggle('item-active');
            calcPrice();
        };
    }

    function calcPrice() {
        var price = 0;

        for (var _i3 = 0; _i3 < items.length; _i3++) {
            if (items[_i3].classList.contains('item-active')) {
                price += parseInt(items[_i3].getAttribute('data-price'));
            }
        }

        divPrice.innerHTML = price;
    }

    console.log(sum(1, 2, 3, 4, 5));

    var t = new Timer(500);
    t.start();

    var min = function min(a, b) {
        return a - b;
    };

    var divide = function divide(a, b) {
        if (b == 0) {
            return null;
        }

        return a - b;
    };

    console.log(min(5, 3));
};

function sum() {
    var sum = 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum;
}

var Timer = function () {
    function Timer() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

        _classCallCheck(this, Timer);

        this.time = time;
    }

    _createClass(Timer, [{
        key: 'tick',
        value: function tick() {
            this.time--;
            console.log(this.time);
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            setInterval(function () {
                _this.tick();
            }, 1000);
        }
    }]);

    return Timer;
}();