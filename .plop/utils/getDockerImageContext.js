module.exports.getDockerImageContext = function (imageName) {
  return (...commands) => commands.map(command => `docker exec -t ${imageName} bash -c "${command}"`)
}