import { Selector } from "testcafe";

fixture`Homepage`.page`http:localhost:3001`;

test("Root is present", async t => {
  await t.debug();
  const root = Selector("#root");

  await t.expect(root).ok();
});
