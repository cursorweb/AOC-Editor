import express from "express";
const app = express();

app.use(express.static("build"));
app.use("/lib/dist", express.static("lib/dist"));

app.listen(8080);
console.log("Ready on http://localhost:8080")