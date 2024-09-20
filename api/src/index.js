import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import { studentsRouter } from "./students/routes.js";

const app = new Koa();

app.use(bodyParser());

app.use(studentsRouter.routes());
app.use(studentsRouter.allowedMethods());

export { app };
