import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import log from './../logger';

const ls = promisify(fs.readdir);

function cutExtension(name) {
  return path.parse(name).name;
}

function isVariable(name) {
  const firstLetter = name[0];
  const lastLetter = name.slice(-1);
  return firstLetter + lastLetter === '{}';
}

export default async function findVariableName(pathToFolder) {
  const foldersAndFiles = await ls(pathToFolder);
  const variables = foldersAndFiles.map(cutExtension).filter(isVariable);
  if (variables.length > 1) {
    log.error(
      'More than one variable on one level not allowed.',
      pathToFolder,
      variables
    );
  }
  return variables[0] || null
}