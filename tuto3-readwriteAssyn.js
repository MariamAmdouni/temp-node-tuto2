const { readFile, writeFile } = require('fs');

readFile('./test/text.txt', 'utf8', (err, first) => {
  if (err) {
    console.log(err);
    return;
  }

  readFile('./test/text.txt', 'utf8', (err, second) => {
    if (err) {
      console.log(err);
      return;
    }

    writeFile('./test/text2.txt', `Here is the result: ${first} , ${second}`, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('File write successful.');
    });
  });
});
