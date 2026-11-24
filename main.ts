import * as fs from "node:fs";

const title = "Lead Taste Tester of Hotel Lobby Air";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", title + "\n");
