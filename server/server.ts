const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');
const path = require('path');
let LastID = 11;
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req: { body: { username: any; password: any; }; }, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: any) => {
  const users = readUsers();

  const user = users.filter(
    (    u: { username: any; password: any; }) => u.username === req.body.username && u.password === req.body.password
  )[0];

  if (user) {
    res.send({ ...formatUser(user), token: checkIfAdmin(user) });
  } else {
    res.status(401).send('Incorrect username or password');
  }
});

server.get('/products',(req:{},res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: () => void)=>{
  const products = readProds();
  res.send(products);
});
//public Name: string, public img: string, public qty: number, public Price: number, public CategoryID: string

server.post('/products',(req:{ body: { Name: string, img: string, qty: number, Price: number, CategoryID: string }; },res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: () => void)=>{

  let prod = { "id":LastID, "Name": req.body.Name, "img": req.body.img, "qty":req.body.qty, "Price":req.body.Price, "CategoryID": req.body.CategoryID,"count": 0,"sum": 0 };
  LastID += 1;
  db.products.push(prod);
  db.save;
//   fs.writeFile ("db.json", JSON.stringify(db), function(err: any) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );
  fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db));
  const products = readProds();
  res.send(products);
});

server.get('/product', (req: { query: { id:any}; }, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  const products = readProds();
  // const product = products.filter(
  //   (p: { id: any; }) => p.id === req.query.id
  //   );
  let x:number = +req.query!.id-1;
  // console.log(req.query);
  res.send(products[x]);
});

server.get('/categories',(req:{},res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: () => void)=>{
  const categories = readCats();
  res.send(categories);
});

server.post('/register', (req: { body: { username: any; }; }, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  const users = readUsers();
  const user = users.filter((u: { username: any; }) => u.username === req.body.username)[0];

  if (user === undefined || user === null) {
    res.send({
      // ...formatUser(req.body.username),
      token: checkIfAdmin(req.body)
    });
    db.users.push(req.body);
    console.log(db);
  } else {
    res.status(500).send('User already exists');
  }
});

server.use('/users', (req: { query?: any; headers?: { authorization: string; }; }, res: { sendStatus: (arg0: number) => void; }, next: () => void) => {
  if (isAuthorized(req.query) || req.query.bypassAuth === 'true') {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function formatUser(user: { password: any; role: string; username: string; }) {
  delete user.password;
  user.role = user.username === 'admin'
    ? 'admin'
    : 'user';
  return user;
}

function checkIfAdmin(user: { username: string; }, bypassToken = false) {
  return user.username === 'admin' || bypassToken === true
    ? 'admin-token'
    : 'user-token';
}

function isAuthorized(req: { headers: { authorization: string; }; }) {
  return req.headers.authorization === 'admin-token' ? true : false;
}

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const users = JSON.parse(dbRaw).users
  return users;
}

function readProds() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const prods = JSON.parse(dbRaw).products
  return prods;
}
function readCats() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const cats = JSON.parse(dbRaw).categories;
  return cats;
}
