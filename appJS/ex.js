 // Realice un programa que permita multiplicar dos números sin utilizar el signo de multiplicación (*)
const multiply = (a, b) => {
	let resultado = 0
	const positivo = Math.abs(b) == b

	for (i = 0; i < Math.abs(b); i++) {
		resultado = positivo ? resultado + a : resultado - a
	}
	return resultado
}
const a = multiply(50, -50)
console.log("Resultado =", a);


// Obtener el número mayor de un arreglo, iterando el arreglo una sola vez
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 1516, 1, 15, 0, 770])
console.log(b);

// Iterando un arreglo solo una vez, escribir una función que elimine los [undedined, false, null y ceros]
const clean = (arr) => arr.reduce((acc, el) => {
	if (el) {
		acc.push(el)
	}
	return acc
}, [])

const c = clean([1, undefined, null, 0, false, 2])
console.log("Respuesta:", c);

// Escribir una función que aplane los arreglos solo en un nivel 	
const arr = [[1, 2], [[3, 4]], [1, []]] // debe devolver = [1, 2, [3, 4], 1, []]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log("Arreglo aplanado:", d)

// Escribir una función que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
	const lowered = str.toLowerCase()
	const splitted = lowered.split(' ')
	const reduced = splitted.reduce((acc, el) => {
		if (acc[el]) {
			acc[el]++
		} else {
			acc[el] = 1
		}
		return acc
	}, {})
	return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}
const e = repeated('Esto es una palabra repetida una largo una')
console.log("La palabra:", e)

// Escriba un programa que verifique si un String es un palindromo
 const isPalindrome = (str) => {
	str = str.replace('/\s/g', '')
	const lowered = str.toLowerCase()
	const splitted = lowered.split('')
	const reversed = splitted.reverse()
	const joined = reversed.join('')
	return lowered == joined
}

const f = isPalindrome('Arenera') // Do geese see God, Rodador, Oso, Arenera
console.log("Arenera ¿Es un palimdromo?:", f)