import injectVariables from './injectVariables';
import readJSON from './readJSON';

export default async function generateResponse({ path: pathToTemplate, variables }) {
  const mockTemplate = await readJSON(pathToTemplate);
  return injectVariables({ template: mockTemplate, variables })
}