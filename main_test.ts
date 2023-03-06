// url_test.ts
import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";

const baseUrl = "https://main.planetpope.workers.dev/";

Deno.test("Router: GET /", async () => {
  const res = await fetch(baseUrl);
  const html = await res.text();
  assertEquals(res.status, 200);
  assertEquals(html,"Hello, world!");
});