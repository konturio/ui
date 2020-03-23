function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}
module.exports.capitalize = capitalize;


function camelCase(string) {
  return string.replace(/[_, -]/gm, ' ').split(' ')
    .map((word, i) => i > 0 ? capitalize(word) : word).join('')
}

module.exports.camelCase = camelCase;

function pascalCase(string) {
  return string.replace(/[_, -]/gm, ' ').split(' ')
    .map((word, i) =>  capitalize(word)).join('')
}


function kebabCase(string) {
  let result = string;

  // Convert camelCase capitals to kebab-case.
  result = result.replace(/([a-z][A-Z])/g, match => {
    return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase();
  });

  // Convert non-camelCase capitals to lowercase.
  result = result.toLowerCase();

  // Convert non-alphanumeric characters to hyphens
  result = result.replace(/[^-a-z0-9]+/g, '-');

  // Remove hyphens from both ends
  result = result.replace(/^-+/, '').replace(/-+$/, '');

  return result;
}

module.exports.kebabCase = kebabCase;
