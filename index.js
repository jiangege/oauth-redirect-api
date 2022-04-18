const Koa = require("koa");

const Router = require("@koa/router");

const app = new Koa();

const router = new Router();

router.get("/redirect/:port", (ctx) => {
  ctx.redirect(`http://localhost:${ctx.params.port}`);
});

app.use(router.routes());

app.listen(process.env.PORT ?? 8000);
