# nodejs-console-log

## USAGE

```bash
npm i nodejs-console-log --save
```

```js
const console = require('nodejs-console-log');

console.dtFormat('DD/MM/YYYY HH:mm:ss');

console.log('=> Test Log.');
console.info('=> Test Info.');
console.warn('=> Test Warning.');
console.error('=> Test Error.');
```

## OUTPUT

```
28/02/2020 11:37:10 - => Test Log.
28/02/2020 11:37:10 - => Test Info.
28/02/2020 11:37:10 - => Test Warning.
28/02/2020 11:37:10 - => Test Error.
```

