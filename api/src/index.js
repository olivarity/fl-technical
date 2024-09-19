import Koa from "koa";
import { studentsRouter } from "./students/routes.js";

const app = new Koa();

app.use(studentsRouter.routes());
app.use(studentsRouter.allowedMethods());

export { app };
