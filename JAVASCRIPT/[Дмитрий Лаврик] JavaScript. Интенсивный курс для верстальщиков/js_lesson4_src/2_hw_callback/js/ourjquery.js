function $(selector) {
    var elements;

    if (selector instanceof HTMLElement) {
        elements = [selector];
    } else {
        elements = document.querySelectorAll(selector);
    }

    return new OurJquery(elements);
}

function OurJquery(elements) {

    this.elements = elements;

    /**
     * Подвесить любое событие на группу элементов
     * @param string eventname Тип события
     * @param callable f Функция обработчик
     * @returns self Текущий объект
     */
    this.on = function (eventname, f) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventname, f);
        }

        return this;
    }

    this.addClass = function (name) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(name);
        }

        return this;
    }

    this.removeClass = function (name) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(name);
        }

        return this;
    }

    this.html = function (html) {
        if (typeof (html) === "undefined") {
            return this.elements[0].innerHTML;
        }

        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = html;
        }

        return this;
    }

    this.fade = function (time, callback) {
        var func = callback || function(){};
        
        for (var i = 0; i < this.elements.length; i++) {
            tehFade(this.elements[i], time, 50, func);
        }
    }

    function tehFade(elem, t, f, callback) {
        // кадров в секунду (по умолчанию 50)
        var fps = f || 50;
        // время работы анимации (по умолчанию 500мс)
        var time = t || 500;
        // сколько всего покажем кадров
        var steps = time / (1000 / fps);
        // текущее значение opacity - изначально 0
        var op = 1;
        // изменение прозрачности за 1 кадр
        var d0 = op / steps;

        // устанавливаем интервал (1000 / fps) 
        // например, 50fps -> 1000 / 50 = 20мс  
        var timer = setInterval(function () {
            // уменьшаем текущее значение opacity
            op -= d0;
            // устанавливаем opacity элементу DOM
            elem.style.opacity = op;
            // уменьшаем количество оставшихся шагов анимации
            steps--;

            // если анимация окончена
            if (steps == 0) {
                // убираем интервал выполнения
                clearInterval(timer);
                // и убираем элемент из потока документа
                elem.style.display = 'none';
                
                callback.call(elem);
            }
        }, (1000 / fps));
    }
}