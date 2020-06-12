/**
 * @param {Object} child
 * @param {string} child.name
 * @returns {boolean}
 */
class CleanStatsSpamPlugin {
  constructor(pluginNameSubstring) {
    this.pluginNameSubstring = pluginNameSubstring;
  }

  shouldShow(child) {
    return !child.name.includes(this.pluginNameSubstring);
  }

  apply(compiler) {
    compiler.plugin('done', stats => {
      if (Array.isArray(stats.compilation.children)) {
        stats.compilation.children = stats.compilation.children.filter(child => this.shouldShow(child));
      }
    });
  }
}

module.exports = CleanStatsSpamPlugin;