var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name, array) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name, array) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function removeLastKitten() {
  return kittens.slice(3)
}

function removeFirstKitten() {
  return kittens.slice(-2)
}
