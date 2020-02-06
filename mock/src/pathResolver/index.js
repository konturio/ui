import path from 'path';
import log from './../logger';
import extractVariables from './extractVariables';
import url from 'url';

const EXT = 'json';
const ROOT_FOLDER = './mock';
const SRC_FOLDER = process.cwd();

/**
 * Accept request and generate full path to file with response example
 * according to endpoint, and extract variables from dynamic path
 * @param {Request} request 
 */
export default async function resolvePath(request) {
  const { url:requestUrl, method } = request;
  const endpoint = url.parse(requestUrl).pathname;
  const file = method.toLowerCase();
  const rootPath = path.join(SRC_FOLDER, ROOT_FOLDER)
  const dynamicPath = path.join(
    endpoint,
    `${file}.${EXT}`
  );

  log.debug(dynamicPath, 'resolvePath');
  
  const { staticPath, variables } = await extractVariables({ rootPath, dynamicPath });

  return {
    path: path.join(rootPath, staticPath),
    variables,
  }
}