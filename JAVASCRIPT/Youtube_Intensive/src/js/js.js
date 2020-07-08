
// API KEY = AIzaSyDH6-vOWsDuIYTXGiphhO1kj7U8x77lKqY

window.onload = function () {
    closeModal();
};


const switcher = document.querySelector('#cbx'),
    more = document.querySelector('.more'),
    modal = document.querySelector('.modal'),
    videos = document.querySelectorAll('.videos__item');

let player;


function bindSlideToggle(trigger, boxbody, content, openClass) {
    // console.log('asd');
    let button = {
        'element': document.querySelector(trigger),
        'active': false
    };
    const box = document.querySelector(boxbody),
        boxContent = document.querySelector(content);

    button.element.addEventListener('click', () => {
        //Проверяем меню на активность
        if (button.active === false) {
            button.active = true;
            //Активный класс для слайда
            box.classList.add(openClass);
        } else {

            button.active = false;
            //Активный класс для слайда
            box.classList.remove(openClass);
        }
    });
}

bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');



let body = document.querySelector('.body');
let line = document.querySelectorAll('line');
let discribtion = document.querySelectorAll('.videos__item-descr');
let views = document.querySelectorAll('.videos__item-views');
let mode = document.querySelector('.header__item-descr');
let logoYoutube = document.querySelector('.logo > img');



let night;

function switchMode() {

    let discribtion = document.querySelectorAll('.videos__item-descr');
    let views = document.querySelectorAll('.videos__item-views');
    let mode = document.querySelector('.header__item-descr');

    if (body.classList.contains('night')) {
        document.body.classList.remove('night');
        line.forEach(item => {
            item.style.stroke = 'black';
        });
        discribtion.forEach(item => {
            item.style.color = 'black';
        });
        views.forEach(item => {
            item.style.color = 'black';
        });
        mode.style.color = 'black';
        logoYoutube.src = 'logo/youtube.svg';
    } else {
        document.body.classList.add('night');
        line.forEach(item => {
            item.style.stroke = 'white';
        });
        discribtion.forEach(item => {
            item.style.color = 'white';
        });
        views.forEach(item => {
            item.style.color = 'white';
        });
        mode.style.color = 'white';
        logoYoutube.src = 'logo/youtube_night.svg';
    }
}
switcher.addEventListener('change', () => {
    switchMode();
});



// const data = [
//     ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
//     ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
//         '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки Урок 2',
//         '#1 Верстка реального заказа landing page | Марафон верстки | Артем Исламов'],
//     ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
//     ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
// ];


// more.addEventListener('click', () => {
//     const videosWrapper = document.querySelector('.videos__wrapper');
//     more.remove();

//     for (let i = 0; i < data[0].length; i++) {
//         let card = document.createElement('a');
//         card.classList.add('videos__item', 'videos__item-active');
//         card.setAttribute('data-url', data[3][i]);
//         card.innerHTML = `
//             <img src="${data[0][i]}" alt="thumb">
//             <div class="videos__item-descr">
//             ${data[1][i]}
//             </div>
//             <div class="videos__item-views">
//             ${data[2][i]}
//             </div>
//         `;
//         videosWrapper.appendChild(card);
//         setTimeout(() => {
//             card.classList.remove('videos__item-active');
//         }, 10);

//         if (body.classList.contains('night')) {
//             card.querySelector('.videos__item-descr').style.color = 'white';
//             card.querySelector('.videos__item-views').style.color = 'white';
//         } else {
//             card.querySelector('.videos__item-descr').style.color = 'black';
//             card.querySelector('.videos__item-views').style.color = 'black';
//         }
//         bindNewModal(card);
//     }
//     sliceTitle();

// });

function load() {
    gapi.client.init({
        'apiKey': 'AIzaSyDH6-vOWsDuIYTXGiphhO1kj7U8x77lKqY',
        'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
    }).then(function () {
        return gapi.client.youtube.plsyalaistItems.list({
            "part": "snippet,contentDetails",
            "maxResults": '6',
            "playlistId": "PLBCF2DAC6FFB574DE"
        });
    }).then(function(response){
        console.log(response.result);
    }).catch( e => {
        console.log(e);
    });
}


more.addEventListener('click', () => {
    more.remove();
    gapi.load('client', load);
});


function sliceTitle() {
    document.querySelectorAll('.videos__item-descr').forEach(item => {
        item.textContent.trim();

        if (item.textContent.length < 100) {
            return;
        } else {
            const str = item.textContent.slice(0, 101) + "...";
            item.textContent = str;
        }
    });
}

sliceTitle();

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    player.stopVideo();
}

function bindModal(videos) {
    videos.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const id = item.getAttribute('data-url');
            loadVideo(id);
            openModal();
        });
    });
}

bindModal(videos);

function bindNewModal(card) {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        const id = card.getAttribute('data-url');
        loadVideo(id);
        openModal();
    });
}

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__body')) {
        return;
    } else {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        closeModal();
    }
});

function createVideo() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    setTimeout(() => {
        player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: 'PLQ2eyErB1EjwD_ZuNEouXBEKOUbNSPvHW'
        });
    }, 300);

}

createVideo();

function loadVideo(id) {
    player.loadVideoById({ 'videoId': `${id}` });
}














