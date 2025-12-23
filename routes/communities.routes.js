const express = require("express");
const router = express.Router();

const {
  getCommunityById
} = require("../controllers/communities.controller");

router.get("/:id", getCommunityById);

module.exports = router;
