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

function appendKitten(name) {
  var moreCats = ["...kittens", "Broom"];
}

function prependKitten(name) {
  var EvenMoreCats = ["Arnold", "...kittens"];
}

function destructivelyRemoveFirstKitten(name, array) {
  kittens.shift()
}
