const express = require("express");
const { verifyToken, authorizeRole } = require("../middleware/auth");
const { createUser, getUsers, getUserById, updateUser, deleteUser, updateProfile, deleteProfile } = require("../controllers/user.controller");
const { getAllTravelPackages, getTravelPackageById, createBundledTravelPackage, createDestinations, createTravelPackage, getAllDestinations } = require("../controllers/travel-package.controller");

const router = express.Router();

router.get("/users", verifyToken, authorizeRole("admin"), getUsers);
router.get("/user/:id", verifyToken, authorizeRole("admin"), getUserById);
router.post("/user", verifyToken, authorizeRole("admin"), createUser);
router.patch("/user/:id", verifyToken, authorizeRole("admin"), updateUser);
router.delete("/user/:id", verifyToken, authorizeRole("admin"), deleteUser);

router.patch("/account", verifyToken, updateProfile);
router.delete("/account", verifyToken, deleteProfile);

router.get("/travel-packages/table/:limit&:pages", getAllTravelPackages);
router.get("/travel-package/:id", getTravelPackageById);
router.get("/destinations", getAllDestinations);
router.post("/destinations", verifyToken, authorizeRole("admin"), createDestinations);
router.post("/bundled-travel-packages", verifyToken, authorizeRole("admin"), createBundledTravelPackage);
router.post("/travel-package", verifyToken, authorizeRole("admin"), createTravelPackage);


module.exports = router;
