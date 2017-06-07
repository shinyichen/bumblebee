'use strict';
/**
 * Options for the `exec` grunt task
 *
 * @module grunt/exec
 */
module.exports = {
  // this is necessary to make the library AMD compatible
  convert_dsjslib: {
    cmd: 'node node_modules/requirejs/bin/r.js -convert src/libs/dsjslib src/libs/dsjslib'
  },
  latest_commit: {
    cmd: 'git rev-parse --short=7 --verify HEAD | cat > git-latest-commit'
  },
  latest_tag: {
    cmd: 'git describe --abbrev=0 | cat > git-latest-release-tag'
  },
  git_describe: {
    cmd: 'git describe | cat > git-describe'
  },
  npm_install: {
    cmd: 'npm install --no-package-lock --no-shrinkwrap'
  }
};
