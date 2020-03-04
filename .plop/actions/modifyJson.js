const fileReader = require('../utils/io');

async function modifyJson(answers, { location, onEdit }, plop) {
  const file = fileReader(location);
  const json = await file.read();
  const edited = onEdit(json, answers);
  await file.write(edited);
  return `Added ${file.stat.difference} bytes to ${location}`;
}

module.exports = modifyJson