const router = require("express").Router();
const User = require("../models/User");


// ユーザ登録
router.post("/register", async (req, res) => {
    try {
        const newUser = await new User({
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

// ユーザログイン
router.post("/login", async (req, res) => {
    try {
        const loginuser = await User.findOne({email: req.body.email});
        if(!loginuser) return res.status(404).send("ユーザが見つかりません");

        const validPassword = req.body.password === loginuser.password;
        if(!validPassword) return res.status(400).send("パスワードが違います");

        return res.status(200).json(loginuser);
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;