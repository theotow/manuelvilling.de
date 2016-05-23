import glob from 'glob'

glob.sync('../src/**/*spec.js', {realpath: true, cwd: __dirname}).forEach(require)
