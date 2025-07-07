import { Hono } from "hono";

const main = new Hono();

export type AppType = typeof main;

export { main };
