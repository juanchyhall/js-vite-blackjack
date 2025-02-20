import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 *
 * @param {Number} puntosMinimos puintos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento para mostrar las cartas de la computadora
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!divCartasComputadora) throw new Error("Puntos minimos son necesarios");
  if (!puntosHTML) throw new Error("PuntosHTML son necesarios");
  if (!deck) throw new Error("Deck es necesario");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    const imagCarta = crearCarta(carta);
    divCartasComputadora.append(imagCarta);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
