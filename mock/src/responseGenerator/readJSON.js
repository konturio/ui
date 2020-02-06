import fs from 'fs';
import { promisify } from 'util';
import log from './../logger';
import { NOT_EXIST } from './../errors.types';

const readFile = promisify(fs.readFile);

export default async function readJSON(path) {
  try {
    const file = await readFile(path, 'utf8');
    return file
  } catch (error) {
    log.debug(error);
    throw new Error(NOT_EXIST);
  }
}