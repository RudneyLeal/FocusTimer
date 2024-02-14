import state from "./state.js"
import * as el from "./elements.js"

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