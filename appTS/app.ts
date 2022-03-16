// Realice un programa que multiplique dos números sin utilizar
// el signo por o de multiplicación en TypeScript (*).
const multiply = (a, b) => {
  let resultado = 0;
  const positivo = Math.abs(b) == b;

  for(i = 0; i < Math.abs(b); i++) {
    resultado = positivo ? resultado + a : resultado - a;
  }
  return resultado;
}
const a = multiply(7, -7); //-49
console.log(a);