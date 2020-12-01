export default function injectVariables({ template, variables }) {
  Object.keys(variables).forEach(variable => {
    const regExp = new RegExp(variable, 'gm')
    template = template.replace(regExp, variables[variable]);
  });
  return template; 
}