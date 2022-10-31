/* eslint-disable */

export default {
    state: {
        ads: [{
                title: "First ad",
                description: "Hello I am description",
                promo: false,
                imageSrc: "https://v1.vuetifyjs.com/static/doc-images/carousel/sky.jpg",
                id: 1
            },
            {
                title: "Second ad",
                description: "Hello I am description",
                promo: true,
                imageSrc: "https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg",
                id: 2
            },
            {
                title: "Third ad",
                description: "Hello I am description",
                promo: true,
                imageSrc: "https://v1.vuetifyjs.com/static/doc-images/carousel/bird.jpg",
                id: 3
            },
            {
                title: "Fourd ad",
                description: "Hello I am description",
                promo: false,
                imageSrc: "https://v1.vuetifyjs.com/static/doc-images/carousel/planet.jpg",
                id: 4
            },
            {
                title: "Five ad",
                description: "Hello I am description",
                promo: true,
                imageSrc: "https://v1.vuetifyjs.com/static/doc-images/carousel/bird.jpg",
                id: 5
            }
        ]
    },
    mutations: {
        createdAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: {
        createdAd({
            commit
        }, payload) {
            payload.id = Math.random();
            commit('createdAd', payload);
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo === true;
            });
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return (adId) => {
                console.log(adId);
                return state.ads.find(ad => ad.id == adId);
            }
        }
    }
}