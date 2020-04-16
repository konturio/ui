module.exports.getDockerImageContext = function (imageName) {
  return (...commands) => {
    if (commands.length > 1) {
      return commands.map(command => `docker exec -t ${imageName} bash -c "${command}"`);
    } else {
      return `docker exec -t ${imageName} bash -c "${commands[0]}"`;
    }
  }
}