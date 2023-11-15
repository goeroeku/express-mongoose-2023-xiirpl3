const express = require("express");
const router = express.Router();

const kehadiranController = require("../controllers/kehadiran");

router.get("/kehadiran", kehadiranController.list);
router.get("/kehadiran/:id", kehadiranController.show);
router.post("/kehadiran", kehadiranController.create);
router.put("/kehadiran/:id", kehadiranController.update);
router.delete("/kehadiran/:id", kehadiranController.remove);

module.exports = router;
