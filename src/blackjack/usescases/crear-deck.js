import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta ejemplo ['C','D','H','S']
 * @param {Array} tiposEspeciales  ejemplo ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0 || tiposDeCarta == []) {
    throw new Error("tiposDeCarta tiene que ser un arreglo de String");
  }

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
