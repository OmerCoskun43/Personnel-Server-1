"use strict";

const router = require("express").Router();
const {
  list,
  read,
  create,
  update,
  delete: _delete,
} = require("../controllers/department");

const { isLeadOrisAdmin } = require("../middlewares/permissions");

// router.use(isAdmin);
router.route("/").get(list).post(isLeadOrisAdmin, create);
router
  .route("/:id")
  .get(read)
  .put(isLeadOrisAdmin, update)
  .patch(isLeadOrisAdmin, update)
  .delete(isLeadOrisAdmin, _delete);

module.exports = router;
