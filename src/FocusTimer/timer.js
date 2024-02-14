import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--

    if(seconds < 0) {
        seconds = 59;
        minutes--
    }

    if(minutes < 0) {
        reset()
        kitchenTimer.play();
        return
    }

    updateDisplay(minutes, seconds);

    state.coundownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    /*aqui tá dizendo que se o minuto for nulo então pegar o minuto do state
    e bota na variável minutes*/
    seconds = seconds ?? state.seconds
    /*aqui tá dizendo que se o segundo for nulo então pegar o segundo do state
    e bota na variável seconds*/

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
}