import path from 'path';
import checkAccess from './checkAccess';
import findVariableName from './findVariableName';
import { NOT_EXIST } from './../errors.types';

const FROM = '{';
const TO = '}';

const addSlash = (lvl, i, arr) => arr.length - 1 === i ? lvl : lvl + path.sep;

export default async function extractVariables({ rootPath, dynamicPath }) {
  const levels = dynamicPath.split(path.sep).map(addSlash);
  const variables = {};
  let currentPath = '';
  for (const level of levels) {
    const isExist = await checkAccess(path.join(rootPath, currentPath, level));
    if (isExist) {
      currentPath += level;
    } else {
      const locationForSearch = path.join(rootPath, currentPath);
      const variableName = await findVariableName(locationForSearch);
      if (variableName) {
        const parsedLevel = path.parse(level);
        variables[variableName] = parsedLevel.dir || parsedLevel.name;
        currentPath += path.sep + variableName + parsedLevel.ext;
      } else {
        throw new Error(NOT_EXIST)
      }
    }
  }

  return {
    staticPath: currentPath,
    variables
  }
}
