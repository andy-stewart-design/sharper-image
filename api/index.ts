import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "@hono/node-server/vercel";

const app = new Hono().basePath("/");
app.use("/*", cors());

app.get("/", async (c) => {
  return c.json({ message: "Hello from the sharp image api!" });
});

// app.post("/", async (c) => {
//   const body = await c.req.json();
//   return c.json({ body });
// });

export default handle(app);
