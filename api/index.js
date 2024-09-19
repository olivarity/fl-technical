import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'o7 from Koa';
});

app.listen(3000);