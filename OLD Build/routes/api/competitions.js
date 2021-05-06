const router = require("express").Router();
const competitionController = require("../../controllers/competitionController");

// Matches with "/api/admin/competitions"
router.route("/")
  .get(competitionController.findAll)
  .post(competitionController.create);

// Matches with "/api/admin/competitions/:id"
router
  .route("/:id")
  .get(competitionController.findById)
  .put(competitionController.update)
  .delete(competitionController.remove);

module.exports = router;