// Write your "actions" router here!
const express = require("express")
const router = express.Router()
const Action = require("./actions-model")
const { checkId } = require("./actions-middlware.js")

router.get("/", async (req, res, next) => {
  try {
    const allActions = await Action.get()
    res.status(200).json(allActions)
  } catch (error) {
    next(error)
  }
})
router.get("/:id", checkId, async (req, res) => {
  res.status(200).json(req.found)
})
router.post("/", (req, res, next) => {})
// router.get("/", (req, res, next) => {

// })
// router.get("/", (req, res, next) => {

// })

module.exports = router
