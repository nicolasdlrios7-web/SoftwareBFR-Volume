import Fastify from "fastify";

const app = Fastify();

app.get("/health", async () => ({ status: "ok" }));

const port = Number(process.env.PORT ?? 4000);
app.listen({ port }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
