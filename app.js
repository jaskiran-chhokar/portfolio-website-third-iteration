const pug = require('pug');
const fn = pug.compile('views/index.pug', options);
const html = fn(locals); 