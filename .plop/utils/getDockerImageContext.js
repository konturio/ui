export function getDockerImageContext(imageName) {
  return (...commands) => commands.map(command => `docker exec -t ${imageName} bash -c "${command}"`)
}