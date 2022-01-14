// add middlewares here related to actions
const Action = require("./actions-model")
const checkId = async (req, res, next) => {
  try {
    const id = req.params.id
    const found = await Action.get(id)
    if (!found) {
      next({ message: "Id not found" })
    } else {
      req.found = found
      next()
    }
  } catch (error) {
    next(error)
  }
}
module.exports = { checkId }
