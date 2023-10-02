const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../utils/validation/contactValidation");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.delete("/:id", isValidId, ctrl.deleteContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.putContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
