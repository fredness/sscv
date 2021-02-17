const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({static: 'public'});

const fs = require('fs');
const csv = require('csv-parser');

server.use(middlewares);

server.get('/stocks/:sym', (req, res) => {
  const filename = `data/${req.params.sym.toUpperCase()}.csv`;
  const results = [];

  // adapted from example in: https://www.npmjs.com/package/csv-parser
  fs.createReadStream(filename)
    .on('error', () => res.status(404).end())
    .pipe(csv())
    .on('data', data => results.push(data))
    .on('end', () => {
      res.json(results);
    })
});

server.listen(3000, () => {
  console.log('Running at: http://localhost:3000');
});
