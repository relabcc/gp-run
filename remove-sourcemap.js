const fs = require('fs');
const glob = require('glob');

glob('build/**/*.map', (err, list) => Promise.all(list.map((src) => fs.unlinkSync(src))));
