require("dotenv").config()
const server = require("./api/server")
const port = process.env || 5000
server.listen(port, () => {
  console.log("Server listening on port " + port)
})
