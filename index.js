var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name, array) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name, array) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name, array) {
  kittens.pop()
}

function appendKitten(name, array) {
  return [...kittens, "Broom"];
}

function prependKitten(name, array) {
  return ["Arnold", ...kittens];
}

function destructivelyRemoveFirstKitten(name, array) {
  kittens.shift()
}
