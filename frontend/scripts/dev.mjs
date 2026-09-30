import { spawn } from "node:child_process";
import open, { apps } from "open";

const PORT = process.env.PORT || 3000;
const url = `http://localhost:${PORT}`;

const child = spawn("npx", ["next", "dev", "-p", String(PORT)], {
  stdio: "inherit",
  shell: true,
});

let opened = false;
const timer = setInterval(async () => {
  try {
    await fetch(url);
    clearInterval(timer);
    if (!opened) {
      opened = true;
      await open(url, { app: { name: apps.chrome } });
    }
  } catch {
    // سرور هنوز بالا نیامده
  }
}, 1000);

process.on("SIGINT", () => {
  child.kill();
  process.exit();
});
