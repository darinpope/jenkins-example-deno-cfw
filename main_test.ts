// url_test.ts
import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";

const baseUrl = "https://main.planetpope.workers.dev/";

Deno.test("Router: GET /", async () => {
  const res = await fetch(baseUrl);
  assertEquals(res.status, 200);
  const html = await res.text();
  assertEquals(html,"Hello, world!");
});