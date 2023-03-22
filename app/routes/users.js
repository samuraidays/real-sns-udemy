const router = require("express").Router();
const User = require("../models/User");

/* router.get("/", (req, res) => {
    res.send("user route");
}); */

// ユーザ登録
router.post("/register", async (req, res) => {
    try {
        const newUser = awaite new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;