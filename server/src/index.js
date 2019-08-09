const Koa = require('koa');
const logger = require('koa-logger');
const { PORT } =  require('./config');

const app = new Koa();

app.use(logger());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));