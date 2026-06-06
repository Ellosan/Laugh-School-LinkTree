const fs = require("fs");

async function main() {
  const tabs = await fetch("http://127.0.0.1:9231/json").then((response) => response.json());
  const tab = tabs.find((item) => item.type === "page" && item.url.includes("127.0.0.1:4173"));
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  let next = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = next++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!pending.has(message.id)) return;
    pending.get(message.id)(message);
    pending.delete(message.id);
  });

  await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));
  await send("Runtime.evaluate", {
    expression: 'document.querySelector(".options-dropdown").open = true; applyLanguage("en"); document.body.offsetHeight'
  });

  const audit = await send("Runtime.evaluate", {
    expression: 'JSON.stringify({lang:document.documentElement.lang, dropdown:document.querySelector(".options-dropdown").open, viber:document.querySelector(".viber strong").textContent, dropdownTitle:document.querySelector(".options-dropdown summary strong").textContent, links:[...document.querySelectorAll(".option-row strong")].map(x=>x.textContent), innerWidth:innerWidth, scrollWidth:document.documentElement.scrollWidth})',
    returnByValue: true
  });

  const screenshot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-open-en.png", Buffer.from(screenshot.result.data, "base64"));
  console.log(audit.result.result.value);
  ws.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
