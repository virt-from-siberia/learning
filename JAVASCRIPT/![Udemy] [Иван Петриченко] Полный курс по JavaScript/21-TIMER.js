window.addEventListener('DOMContentLoaded', function () {
    let deadTime = '2018-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hourse = timer.querySelector('.hourse'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let temp = getTimeRemaining(endtime);
            hourse.textContent = temp.hours;
            minutes.textContent = temp.minutes;
            seconds.textContent = temp.seconds;

            if (temp.total <= 0){
                clearInterval(timeInterval);
            }

        }
    }

    setClock('timer', deadTime);

})