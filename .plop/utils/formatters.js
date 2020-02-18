function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}
module.exports.capitalize = capitalize;


function camelCase(string) {
  return string.toLowerCase().replaceAll('_', ' ').split(' ')
    .map((word, i) => i > 0 ? capitalize(word) : word).join('')
}
module.exports.camelCase = camelCase;

