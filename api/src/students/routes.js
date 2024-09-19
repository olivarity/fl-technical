import Router from "@koa/router";
import { selectAllStudents } from "./queries.js";

const studentsRouter = new Router({ prefix: "/students" });

studentsRouter.get("getAllStudents", "/", async (ctx, next) => {
  const students = await selectAllStudents();
  ctx.body = students;
});

export { studentsRouter };
