import { Hono } from "hono";
import { handle } from "@hono/node-server/vercel";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello from the sharp image api!" });
});

app.post("/", async (c) => {
  const body = await c.req.json();
  return c.json({ body });
});

export default handle(app);
