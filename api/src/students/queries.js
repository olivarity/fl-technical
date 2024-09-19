import { db } from "../db.js";

export async function selectAllStudents() {
  const students = await db.selectFrom("students").selectAll().execute();
  return students;
}
