const Koa = require("koa");
const views = require("koa-views");
const path = require("path");
const data = require("./data.js");
const app = (module.exports = new Koa());

app.use(views(path.join(__dirname, "/src/views"), { extension: "ejs" }));

app.use(async function(ctx) {
  await ctx.render("app", data);
});

app.listen(3000);
