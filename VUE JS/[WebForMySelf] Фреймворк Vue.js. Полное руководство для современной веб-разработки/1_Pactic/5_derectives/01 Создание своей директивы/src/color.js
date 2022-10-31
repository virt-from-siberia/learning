import {
    setTimeout
} from "timers";

export default {
    bind(el, bindings, vnode) {

        console.log(bindings);
        const fontModifier = bindings.modifiers['font'];

        if (fontModifier) {
            el.style.fontSize = '30px';
        }


        const delayModifier = bindings.modifiers['delay'];
        let delay = 0;

        if (delayModifier) {
            delay = 2000;
        }


        setTimeout(() => {
            console.log(delay + 'delay is running');
            const arg = bindings.arg;
            el.style[arg] = bindings.value;
        }, delay);
    }
};