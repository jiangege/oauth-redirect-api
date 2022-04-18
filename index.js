const Koa = require("koa");

const Router = require("@koa/router");

const app = new Koa();

const router = new Router();

router.get("/redirect/:port", (ctx) => {
  ctx.redirect(`http://localhost:${ctx.params.port}?${ctx.querystring}`);
});

app.use(router.routes());

app.listen(8000);