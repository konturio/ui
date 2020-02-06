import fs from 'fs';
import { promisify } from 'util';
import log from './../logger';

const access = promisify(fs.access);

export default async function checkAccess(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
}