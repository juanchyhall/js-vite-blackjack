/**
 *
 * @param {Array<String>} carta
 * @returns {Number} devuelve el valor numerico de una carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
