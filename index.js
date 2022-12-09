import express from "express";
const app = express();

import * as fs from "fs";

app.use(express.static("build"));
app.use("/lib/dist", express.static("lib/dist"));

app.get("/api/types", (_, res) => {
    res.json(fs.readdirSync("lib/dist").filter(x => x.endsWith(".d.ts")));
});

app.listen(8080);
console.log("Ready on http://localhost:8080")