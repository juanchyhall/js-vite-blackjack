import { crearCarta } from "./crear-carta";
/**
 * Esta funcion es para pedir una carta
 * @param {Array<String>} deck ingresa el array del mazo
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
