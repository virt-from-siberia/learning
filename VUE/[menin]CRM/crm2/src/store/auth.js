import firebase from "firebase/app";

export default {
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
            } catch (error) {
                commit("setError", error);
                throw error;
            }
        },

        async logout({ commit }) {
            await firebase.auth().signOut();
            commit("clearInfo");
        },

        async register({ dispatch, commit }, { email, password, name }) {
            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                //Диспатчим метод т.к обрашяемся к методам в vuex
                const uid = await dispatch("getUid");
                //Делаем запись в бд
                //Обрашяемся к модулю базы данных .database()
                //Вызываем метод .re() который будет указывать что мы хотим обратится к какому либо полю из базы даных
                //Прописываем путь к обьекту, структура задется в пути
                //Создается таблица users/ id юзера/ info
                await firebase
                    .database()
                    .ref(`/users/${uid}/info`)
                    .set({
                        bill: 10000,
                        name: name,
                    });
            } catch (error) {
                console.log("ERROR");

                commit("setError", error);
                throw error;
            }
        },
        //Получаем id юзера из firebase
        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },
    },
};
