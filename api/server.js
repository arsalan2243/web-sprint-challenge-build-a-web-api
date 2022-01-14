const express = require("express")
const server = express()
const actionRouter = require("./actions/actions-router")
const projectsRouter = require("./projects/projects-router")

server.use(express.json())
server.use("/api/actions", actionRouter)
server.use("/api/projects", projectsRouter)
server.use("*", handleError)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js

// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server
//eslint-disable-next-line
function handleError(err, req, res, next) {
  res.status(404).json({ message: err.message, error: "something went wrong" })
}
