const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const { check } = require("express-validator");
const {Validate} = require("../Middleware/validate")

router.post(
    "/sign-up",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("name")
        .not()
        .isEmpty()
        .withMessage("You first name is required")
        .trim()
        .escape(),
    check("password")
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage("Must be at least 8 chars long"),
    Validate,
    userController.registerUser
);


router.post(
    "/login",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("password").not().isEmpty(),
    Validate,
    userController.loginUser
);

module.exports = router;