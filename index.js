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
  const moreCats = ["...kittens", "Broom"];
}

function prependKitten(name, array) {
  const EvenMoreCats = ["Arnold", "...kittens"];
}
