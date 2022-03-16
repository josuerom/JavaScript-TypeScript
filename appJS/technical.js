const flatten = arr => arr.reduce((acc, el) => acc.concat(el));
const a = flatten([[1, 2, 3, [], 4], [5, [6, [7]]]]); //[1, 2, 3, [], 4, 5, [6, [7]]]
console.log(a);

const getBiggets = num => num.reduce((acc, el) => acc > el ? acc : el);
const b = getBiggets([165, -325, 1542, 62, 495, 984, 32]);
console.log(b);

const clean = cl => cl.reduce((acc, el) => {
  if (el) {
    acc.push(el);
  }
  return acc;
}, []);
const c = clean([undefined, 1, false, 2, null, 0]);
console.log(c);

const multiply = (a, b) => {
  let resultado = 0;
  const positivo = Math.abs(b) == b;

  for (i = 0; i < Math.abs(b); i++) {
    resultado = positivo ? resultado + a : resultado - a;
  }
  return resultado;
}
const d = multiply(7, -7);
console.log(d);

const isPalindrome = (str) => {
  str = str.replace('/\s/g', '');
  const lowered = str.toLowerCase();
  const splitted = lowered.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join();
  return lowered == joined;
}
const e = isPalindrome('Rodador');
console.log(e);